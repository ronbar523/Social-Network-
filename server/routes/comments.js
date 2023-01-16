const express = require("express");
const router = express.Router();

const CreateController = require("../controllers/Comments/CreateCurd/createController");
const FindController = require("../controllers/Comments/FindCurd/find");
const SendLikeController = require("../controllers/Comments/UpdateCurd/Like/sendLikeController");
const RemoveLikeController = require("../controllers/Comments/UpdateCurd/Like/removeLikeController");
const DeleteCommentController = require("../controllers/Comments/DeleteCurd/deleteController")
const DeleteReduxController = require("../controllers/Comments/DeleteCurd/deleteReduxController");
const UpdateReduxController = require("../controllers/Comments/UpdateCurd/Info/UpdateCommentController")
const FindUsersLikeController = require("../controllers/Comments/FindCurd/findUserByLike");

const UserMiddleware = require("../middleware/userMiddleware");

router.post("/create/:id", UserMiddleware, CreateController.createRequest);

router.get("/find/:id", FindController.findByIdRequest); 

router.get("/find_my_comment/:id", FindController.findByCreatedByRequest); 

router.get("/find_by_created_at/:createdAt/:createdBy", FindController.findByCreatedAtRequest); 

router.patch("/send_like/:id", UserMiddleware, SendLikeController.sendLikesRequest);

router.patch("/send_like_redux/:createdAt/:createdBy", UserMiddleware, SendLikeController.sendLikesRequest2);

router.patch("/remove_like/:id", UserMiddleware, RemoveLikeController.removeLikesRequest);

router.patch("/remove_like_redux/:createdAt/:createdBy", UserMiddleware, RemoveLikeController.removeLikesRequest2);

router.delete("/delete/:id", UserMiddleware, DeleteCommentController.deleteCommentRequest);

router.delete(
  "/delete/:createdAt/:CreatedBy",
  UserMiddleware,
  DeleteReduxController.deleteCommentRequest
);


router.patch(
  "/update/:createdAt/:createdBy",
  UserMiddleware,
  UpdateReduxController.updateDescriptionByCreatedAt
);

router.patch(
  "/update/:id",
  UserMiddleware,
  UpdateReduxController.updateDescriptionById
);

router.get(
  "/find_comment_like/:id",
  FindUsersLikeController.findUserLikeRequest
);




module.exports = router;