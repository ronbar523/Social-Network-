const CommentModel = require("../../../model/commentModel");
const CommentValidation = require("../../../validation/commentValidation");
const UserModel = require("../../../model/userModel");
const PostModel = require("../../../model/postModel");
const fs = require("fs");
const path = require("path");


const createRequest = async (req, res) => {
    try {

      console.log("F")
      const requestComment = await CommentValidation.createSchema.validateAsync(
        req.body, {
            abortEarly: false
        }
      );


      const jwtUser = await UserModel.findUserByEmail(req.jwtData.email);

      const { id } = req.params;

      const post = await PostModel.findPostById(id)
      const postId = post._id
      const countComments = post.countComments + 1

      await CommentModel.createComment(
        requestComment.userMedia,
        requestComment.description,
        jwtUser[0].nickName,
        jwtUser[0].photo,
        requestComment.date,
        requestComment.like,
        requestComment.countLikes,
        requestComment.arrLikes,
        requestComment.createdAt,
        jwtUser[0].id,
        post._id
      );
      
      await PostModel.updateCountComment(postId, countComments);
      
      res.json({ status: 200, msg: "work", response: requestComment });


    } catch (err) {
      res.status(400).json({ status: 400, err: err });
    }
}


module.exports = {
  createRequest,
};
