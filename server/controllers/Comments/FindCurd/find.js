const CommentModel = require("../../../model/commentModel");


const findByIdRequest = async (req, res) => {
  try {
    const { id } = req.params; 
    const comment = await CommentModel.findCommentById(id);
    res.json(comment);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

const findByCreatedByRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const myComment = await CommentModel.findCommentByCreatedBy(id);
    res.json(myComment);
  } catch (err) {
    res.status(400).json({ err: err })
  }
}

const findByCreatedAtRequest = async (req, res) => {
  try {
    const { createdAt, createdBy } = req.params;
    const comment = await CommentModel.findByCreatedAt(createdAt, createdBy);
    res.json(comment);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};



module.exports = {
  findByIdRequest,
  findByCreatedByRequest,
  findByCreatedAtRequest,
};