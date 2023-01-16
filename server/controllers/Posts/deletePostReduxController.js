const PostModel = require("../../model/postModel");
const UserModel = require("../../model/userModel");
const CommentModel = require("../../model/commentModel");

const deletePostRequest = async (req, res) => {
  try {
    const { createdAt, createdBy } = req.params; 

    const post = await PostModel.findByCreatedAt(createdAt, createdBy);

    const user = await UserModel.findUserById(createdBy)
    
    const createdById = user._id.toString();;
    const userId = post[0].createdBy.toString();
    const count = user.countPost;
  
    if (userId === createdById || user.isAdmin === true) {
      await PostModel.deletePostById(post[0]._id);
      await UserModel.updateCountPost(user._id, count - 1);
      await CommentModel.deleteAllCommentsInPost(post[0]._id);
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
