const mongoose = require("mongoose");
const PostModel = require("../model/postModel");

const commentSchema = new mongoose.Schema({
  userMedia: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdByName: {
    type: String,
    required: true,
  },
  userPhoto: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  like: {
    type: Boolean,
    required: true,
    default: false,
  },
  countLikes: {
    type: Number,
    required: true,
    default: 0,
  },
  arrLikes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  createdPostBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post",
    required: true,
  },
});

const Comment = mongoose.model("comment", commentSchema);


const createComment = (
  userMedia,
  description,
  createdByName,
  userPhoto,
  date,
  like,
  countLikes,
  arrLikes,
  createdAt,
  createdBy,
  createdPostBy
) => {
  const newComment = new Comment({
    userMedia,
    description,
    createdByName,
    userPhoto,
    date,
    like,
    countLikes,
    arrLikes,
    createdAt,
    createdBy,
    createdPostBy,
  });
  return (
    newComment.save(),
    PostModel.newComment(createdPostBy, newComment._id)
  ); 
  
};

const allCommentOfPost = (createdPostBy) => {
  return Comment.find(createdPostBy);
};

const findCommentById = (id) => {
  return Comment.findById(id);
};

const deleteAllCommentsInPost = (createdPostBy) => {
  return Comment.remove({ createdPostBy });
};

const sendLike = (id, arrLikes) => {
  return Comment.findByIdAndUpdate(
    id,
    { $push: { arrLikes: arrLikes } },
    { new: true }
  );
};

const removeLike = (id, arrLikes) => {
  return Comment.findByIdAndUpdate(
    id,
    { $pull: { arrLikes: arrLikes } },
    { new: true }
  );
};

const updateCountLikes = (id, countLikes) => {
  return Comment.findByIdAndUpdate(
    id,
    { $set: { countLikes: countLikes } },
    { new: true }
  );
};

const findCommentByCreatedBy = (createdBy) => {
  return Comment.find({ createdBy: createdBy }).sort({ createdAt: "-1" }).limit(1);
};

const findByCreatedAt = (createdAt, createdBy) => {
  return Comment.find({
    $and: [{ createdAt: createdAt }, { createdBy: createdBy }],
  })
    .select(["-__v"]);
};

const deleteComment = (id) => {
  return Comment.findByIdAndDelete(id)
}
 
const updateCommentByCreatedAt = (createdAt, createdBy, { description }) => {
  return Comment.updateOne({ createdAt, createdBy }, { description: description });
};

const updateDescriptionById = (id, { description }) => {
  return Comment.findByIdAndUpdate(
    id,
    { $set: { description: description } },
    { new: true }
  );
}



module.exports = {
  createComment,
  allCommentOfPost,
  findCommentById,
  sendLike,
  removeLike,
  updateCountLikes,
  findCommentByCreatedBy,
  findByCreatedAt,
  deleteComment,
  updateCommentByCreatedAt,
  updateDescriptionById,
  deleteAllCommentsInPost
};
