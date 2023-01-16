const PostModel = require("../../../model/postModel");

const removeLikesRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findPostById(id);
    const myId = req.jwtData._id;
    const postId = post._id.toString();
    const likesArr = post.arrLikes;
    let flag = false;
    const countLikes = post.countLikes - 1;

    if (likesArr.length > 0) {
      likesArr.forEach((item) => {
        const stringId = item.toString();
        if(stringId === myId){
          flag = true
        }
      })
      if (!flag) {
        throw "you not make like to this post";
      }
    } else {
      throw "not have likes for this post";
    }

    await PostModel.removeLike(postId, myId);
    await PostModel.updateCountLikes(postId, countLikes);
    res.json({ status: 200, msg: "like remove" });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

module.exports = {
  removeLikesRequest,
};
