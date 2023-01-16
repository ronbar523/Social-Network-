const PostModel = require("../../model/postModel");
const PostValidation = require("../../validation/postValidation");
const UserModel = require("../../model/userModel");

const updatePostRequest = async (req, res) => {
  try {
    const { createdAt, createdBy } = req.params;

    const requestUpdate =
      await PostValidation.updatePostSchema.validateAsync(
        req.body,
        { abortEarly: false }
      );    

    await PostModel.updatePostByCreatedAt(createdAt, createdBy, requestUpdate);

    res.json({ status: 200, msg: "work", response: requestUpdate });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};


module.exports = {
  updatePostRequest,
};