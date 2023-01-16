const PostModel = require("../../../model/postModel");

const sendLikesRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findPostById(id);

    const myId = req.jwtData._id;
    const postId = post._id.toString()
    const likes = post.arrLikes;
    const countLikes = post.countLikes + 1;

    likes.forEach((item) => {
      let stringId = item.toString();
      if (stringId === myId) {
        throw "you already did like for this post";
      } 
    })

    await PostModel.sendLike(postId, myId);
    await PostModel.updateCountLikes(postId, countLikes)
    res.json({ status: 200, msg: "new like" });
    
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

module.exports = {
  sendLikesRequest,
};