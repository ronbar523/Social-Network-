const PostModel = require("../../model/postModel");
const UserModel = require("../../model/userModel");
const PostValidation = require("../../validation/postValidation");


const createPostRequest = async (req, res) => {
  try {

    const requestPost = await PostValidation.postSchema.validateAsync(
      req.body,
      {
        abortEarly: false,
      }
    );
    
    const jwtUser = await UserModel.findUserByEmail(req.jwtData.email);
    

    await PostModel.createPost(
      requestPost.description,
      requestPost.category,
      requestPost.media,
      requestPost.userMedia,
      requestPost.createdByName,
      requestPost.date,
      requestPost.like,
      requestPost.countLikes,
      requestPost.arrLikes,
      requestPost.countComments,
      requestPost.arrComments,
      requestPost.createdAt,
      jwtUser[0].id
    );


    const count = jwtUser[0].countPost

    await UserModel.updateCountPost(jwtUser[0].id, count + 1 );

    res.json({ status: 200, msg: "work", response: requestPost,  });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

module.exports = {
  createPostRequest,
};
