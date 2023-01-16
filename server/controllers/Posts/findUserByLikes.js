
const PostModel = require("../../model/postModel");
const UserModel = require("../../model/userModel");


const findUserByLikesRequest = async (req, res) => {
  try {

    const { id } = req.params;
    const post = await PostModel.findPostById(id);

    const likes = post.arrLikes;
    const usersArr = []

    for(let x = 0; x < likes.length; x++){
      usersArr.push(await UserModel.findUserById(likes[x].toString()))
    }

    res.json(usersArr);
    
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

module.exports = {
  findUserByLikesRequest,
};