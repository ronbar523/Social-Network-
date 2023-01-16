const CommentModel = require("../../../model/commentModel");
const UserModel = require("../../../model/userModel");
const Jwt = require("../../../config/jwt");


const findUserLikeRequest = async (req, res) => {
  try {

    const { id } = req.params;
    let { start, end, userLog, flag2 } = req.query;
    start = Number(start);
    end = Number(end);

    const comment = await CommentModel.findCommentById(id);

    const likes = comment.arrLikes;
    const usersArr = [];
    var flag = false;

    if (userLog === "true") {
      req.jwtData = await Jwt.verifyToken(req.headers.token);
    } 


    if (flag2 === "false") {
      for (let x = start; x < end; x++) {
        if (req.jwtData !== undefined) {
          if (req.jwtData._id === likes[x].toString()) {
            flag = true;
          }
          if (flag) {
            if (likes[x + 1] !== undefined) {
              usersArr.push(
                await UserModel.findUserById(likes[x + 1].toString())
              );
            }
          } else {
            usersArr.push(await UserModel.findUserById(likes[x].toString()));
          }
        } else {
          usersArr.push(await UserModel.findUserById(likes[x].toString()));
        }
      }
    } else {
      for (let x = start + 1; x < end; x++) {
        usersArr.push(await UserModel.findUserById(likes[x].toString()));
      }
    }

    res.json({ usersArr, flag });

    } catch (err) {
    res.status(400).json({ err: err });
  }
};






module.exports = {
  findUserLikeRequest,
};
