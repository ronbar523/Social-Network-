const joi = require("joi");

const userPhotoRole = {
  userMedia: joi.any().required(),
};

const descriptionRole = {
  description: joi.string().min(1).max(300).required(),
};

const dateRole = {
  date: joi.string().required(),
};

const createdAtRole = {
  createdAt: joi.number(),
};



const createRole = {
  ...userPhotoRole,
  ...descriptionRole,
  ...dateRole,
  ...createdAtRole,
};

const updateRole = {
  ...descriptionRole,
};


const createSchema = joi.object(createRole);

const updateSchema = joi.object(updateRole)

module.exports = {
  createSchema,
  updateSchema,
};