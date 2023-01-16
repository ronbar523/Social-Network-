const CommentModel = require("../../../model/commentModel");
const UserModel = require("../../../model/userModel");
const PostModel = require("../../../model/postModel");

const deleteCommentRequest = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await CommentModel.findCommentById(id);

    const jwtUser = await UserModel.findUserByEmail(req.jwtData.email);

    const createdById = comment.createdBy.toString();
    const userId = jwtUser[0]._id.toString();

    const postId = comment.createdPostBy.toString();
    const post = await PostModel.findPostById(postId);
    const postCreatedBy = post.createdBy.toString()


    if (createdById === userId || userId === postCreatedBy ||  jwtUser[0].isAdmin === true) {
      const countComment = post.countComments - 1;
      await PostModel.deleteComment(postId, comment._id);
      await CommentModel.deleteComment(id);
      await PostModel.updateCountComment(postId, countComment);

      res.json({ msg: "Comment Deleted Successfully" });
    } else {
      throw "It's not your post or comment and you are not Admin";
    }
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

module.exports = {
  deleteCommentRequest,
};