const CommentModel = require("../../../../model/commentModel");

const sendLikesRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await CommentModel.findCommentById(id);

    const myId = req.jwtData._id;
    const commentId = comment._id.toString();
    const likes = comment.arrLikes;
    const countLikes = comment.countLikes + 1;

    likes.forEach((item) => {
      let stringId = item.toString();
      if (stringId === myId) {
        throw "you already did like for this comment";
      }
    });

    await CommentModel.sendLike(commentId, myId);
    await CommentModel.updateCountLikes(commentId, countLikes);
    res.json({ status: 200, msg: "new like" });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

const sendLikesRequest2 = async (req, res) => {
  try {
    const { createdAt, createdBy } = req.params;
    const comment = await CommentModel.findByCreatedAt(createdAt, createdBy);


    
    const myId = req.jwtData._id;
    const commentId = comment[0]._id.toString();
    const likes = comment[0].arrLikes;
    const countLikes = comment[0].countLikes + 1;

    likes.forEach((item) => {
      let stringId = item.toString();
      if (stringId === myId) {
        throw "you already did like for this comment";
      }
    });
    await CommentModel.sendLike(commentId, myId);
    await CommentModel.updateCountLikes(commentId, countLikes);
    res.json({ status: 200, msg: "new like" });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
};

module.exports = {
  sendLikesRequest,
  sendLikesRequest2,
};
