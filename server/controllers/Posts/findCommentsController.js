const PostModel = require("../../model/postModel");
const CommentModel = require("../../model/commentModel");


const findCommentsPostRequest = async (req,res) => {
    try {
    const { id } = req.params;
    const post = await PostModel.findPostById(id)
    const postObjId = post._id;

    const CommentArr = await CommentModel.allCommentOfPost(
      {createdPostBy: postObjId}
    );
    res.json(CommentArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};







module.exports = {
  findCommentsPostRequest,
};