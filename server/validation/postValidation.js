const joi = require("joi");

const descriptionRole = {
  description: joi.string().min(1).max(2500).required(),
};

const categoryRole = {
  category: joi.string().min(1).max(25).required(),
};

const mediaRole = {
  media: joi.any().required()
};

const userMediaRole = {
  userMedia: joi.any().required(),
};

const createdByNameRole = {
  createdByName: joi.string().required(),
};

const dateRole = {
  date: joi.string().required(),
};

const createdAtRole = {
  createdAt: joi.number()
};

const postRole = {
  ...descriptionRole,
  ...categoryRole,
  ...mediaRole,
  ...userMediaRole,
  ...createdByNameRole,
  ...dateRole,
  ...createdAtRole,
};

const updatePostRole = {
  ...descriptionRole,
};

const updateUserDetailsInPostRole = {
  // ...mediaRole,
  ...createdByNameRole,
};



const postSchema = joi.object(postRole);
const updatePostSchema = joi.object(updatePostRole);
const updateUserDetailsInPostSchema = joi.object(updateUserDetailsInPostRole);




module.exports = {
  postSchema,
  updatePostSchema,
  updateUserDetailsInPostSchema,
};