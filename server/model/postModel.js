const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    // data: Buffer,
    // contentType: String,
    required: true,
  },
  userMedia: {
    type: String,
    required: true,
  },
  createdByName: {
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
  arrLikes: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User", 
  }],
  arrComments: [{ 
    type: mongoose.SchemaTypes.ObjectId, 
    ref: "Comment" 
  }],
  countComments: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

const Post = mongoose.model("posts", postSchema);

const createPost = (
  description,
  category,
  media,
  userMedia,
  createdByName,
  date,
  like,
  countLikes,
  arrLikes,
  countComments,
  arrComments,
  createdAt,
  createdBy
) => {
  const newPost = new Post({
    description,
    category,
    media,
    userMedia,
    createdByName,
    date,
    like,
    countLikes,
    arrLikes,
    arrComments,
    countComments,
    createdAt,
    createdBy,
  });
  return newPost.save();
};

const findAllPosts = () => {
  return Post.find();
};

const findPostById = (id) => {
  return Post.findById(id);
}

const findMyPost = (createdBy) => {
  return Post.find(createdBy);
};

const findPostByCreatedBy = (createdBy) => {
  return Post.find({ createdBy: createdBy })
    .sort({ createdAt: "-1" })
    // .skip(skip)
    .limit(1)
    // .select(["-__v"]);;
};

const findMyLastPost = (createdBy) => {
  return Post.find({ createdBy: createdBy })
    // .sort({ createdAt: "-1" })
    .limit(1)
    .select(["-__v"]);
};

const findByCreatedAt = (createdAt, createdBy) => {
  return Post.find({
    $and: [{ createdAt: createdAt }, { createdBy: createdBy }],
  })
    .limit(1)
    .select(["-__v"]);
};

const findByNickName = (createdBy, skip) => {
  return Post.find({ createdBy: createdBy })
    .sort({ createdAt: "-1" })
    .skip(skip)
    .limit(6)
    .select(["-__v"]);
}



const updatePost = (id, { description }) => {
  return Post.findByIdAndUpdate(
    id,
    { $set: { description: description } },
    { new: true }
  );
};


const updatePostByCreatedAt = (createdAt, createdBy, { description }) => {
  return Post.updateOne({ createdAt, createdBy }, { description: description });
};







const sendLike = (id, arrLikes) => {
  return Post.findByIdAndUpdate(
    id,
    { $push: { arrLikes: arrLikes } },
    { new: true }
  );
};

const removeLike = (id, arrLikes) => {
  return Post.findByIdAndUpdate(
    id,
    { $pull: { arrLikes: arrLikes } },
    { new: true }
  );
};


const updateCountLikes = (id, countLikes) => {
  return Post.findByIdAndUpdate(
    id,
    { $set: { countLikes: countLikes } },
    { new: true }
  );
}


const newComment = (id, arrComments) => {
  return Post.findByIdAndUpdate(
    id,
    { $push: { arrComments: arrComments } },
    { new: true }
  );
};

const deleteComment = (id, arrComments) => {
  return Post.findByIdAndUpdate(
    id,
    { $pull: { arrComments: arrComments } },
    { new: true }
  );
};

const updateCountComment = (id, countComments) => {
  return Post.findByIdAndUpdate(
    id,
    { $set: { countComments: countComments } },
    { new: true }
  );
};







const updateUserDetailsInPost = (createdBy, { media, createdByName }) => {
  return Post.updateMany(
    { createdBy },
    { media, createdByName }
  );
};

const deletePostById = (id) => {
  return Post.findByIdAndDelete(id);
};


module.exports = {
  createPost,
  findAllPosts,
  findPostById,
  findMyPost,
  findPostByCreatedBy,
  updatePost,
  findByNickName,
  updateUserDetailsInPost,
  updateCountLikes,
  sendLike,
  removeLike,
  deletePostById,
  newComment,
  updateCountComment,
  findMyLastPost,
  findByCreatedAt,
  deleteComment,
  updatePostByCreatedAt,
  Post,
};