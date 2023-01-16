const CommentModel = require("../../../../model/commentModel");

const removeLikesRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await CommentModel.findCommentById(id);
    const myId = req.jwtData._id;
    const commentId = comment._id.toString();
    const likesArr = comment.arrLikes;
    let flag = false;
    const countLikes = comment.countLikes - 1;

    if (likesArr.length > 0) {
      likesArr.forEach((item) => {
        const stringId = item.toString();
        if (stringId === myId) {
          flag = true;
        }
      });
      if (!flag) {
        throw "you not make like to this comment";
      }
    } else {
      throw "not have likes for this comment";
    }

    await CommentModel.removeLike(commentId, myId);
    await CommentModel.updateCountLikes(commentId, countLikes);
    res.json({ status: 200, msg: "like remove" });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

const removeLikesRequest2 = async (req, res) => {
  try {
    const { createdAt, createdBy } = req.params;
    const comment = await CommentModel.findByCreatedAt(createdAt, createdBy);

    const myId = req.jwtData._id;
    const commentId = comment[0]._id.toString();
    const likesArr = comment[0].arrLikes;
    let flag = false;
    const countLikes = comment[0].countLikes - 1;

    if (likesArr.length > 0) {
      likesArr.forEach((item) => {
        const stringId = item.toString();
        if (stringId === myId) {
          flag = true;
        }
      });
      if (!flag) {
        throw "you not make like to this comment";
      }
    } else {
      throw "not have likes for this comment";
    }

    await CommentModel.removeLike(commentId, myId);
    await CommentModel.updateCountLikes(commentId, countLikes);
    res.json({ status: 200, msg: "like remove" });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};


module.exports = {
  removeLikesRequest,
  removeLikesRequest2,
};
