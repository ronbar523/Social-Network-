const PostModel = require("../../model/postModel");
const UserModel = require("../../model/userModel");
const CommentModel = require("../../model/commentModel");



const deletePostRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await PostModel.findPostById(id);

    const jwtUser = await UserModel.findUserByEmail(req.jwtData.email);

    const userId = post.createdBy.toString();
    const createdById = jwtUser[0]._id.toString();
    const count = jwtUser[0].countPost;


    if (userId === createdById || jwtUser[0].isAdmin === true) {
      await PostModel.deletePostById(id);
      await UserModel.updateCountPost(jwtUser[0].id, count - 1);
      await CommentModel.deleteAllCommentsInPost(post._id)
      res.json({ msg: "Post Deleted Successfully" });
    } else {
      throw "It's not your post and you are not the Admin";
    }
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

module.exports = {
  deletePostRequest,
};
