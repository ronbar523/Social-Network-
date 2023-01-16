const CommentModel = require("../../../../model/commentModel");
const CommentValidation = require("../../../../validation/commentValidation");

const updateDescriptionByCreatedAt = async (req, res) => {
   try {

    const requestUpdate = await CommentValidation.updateSchema.validateAsync(
      req.body, {
        abortEarly: false
      }
    );

    const { createdAt, createdBy } = req.params;

    await CommentModel.updateCommentByCreatedAt(createdAt, createdBy, requestUpdate);

    res.json({ status: 200, msg: "work", response: requestUpdate });

    } catch (err) {
      res.status(400).json({ status: 400, err: err });
    }
}

const updateDescriptionById = async (req,res) => {
  try {
    const requestUpdate = await CommentValidation.updateSchema.validateAsync(
      req.body, {
        abortEarly: false
      }
    );

    const { id } = req.params;

    await CommentModel.updateDescriptionById(id, requestUpdate);

    res.json({ status: 200, msg: "work", response: requestUpdate });

  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
}



module.exports = {
  updateDescriptionByCreatedAt,
  updateDescriptionById,
};

