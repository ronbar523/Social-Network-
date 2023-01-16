const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../config/uploadFile")
const upload = multer({ storage: storage });
const VerifyUserMiddleware = require("../middleware/verifyUserMiddleware");
const UserMiddleware = require("../middleware/userMiddleware");

const CreatePostController = require("../controllers/Posts/createPostController");
const FindPostController = require("../controllers/Posts/findController");
const FindCommentPostController = require("../controllers/Posts/findCommentsController");
const FindUserByLikeController = require("../controllers/Posts/findUserByLikes");

const UpdatePostController = require("../controllers/Posts/updatePostController");
const UpdateUserDetailsInPostController = require("../controllers/Posts/updateUserDetailsInPostController");
const DeletePostController = require("../controllers/Posts/deletePostController");
const DeletePostReduxController = require("../controllers/Posts/deletePostReduxController");

const SendLikeController = require("../controllers/Posts/Likes/sendLikeController");
const RemoveLikeController = require("../controllers/Posts/Likes/removeLikeController");

const updatePostReduxController = require("../controllers/Posts/updatePostReduxController")

const FindUserArr = require("../controllers/Posts/findUserArr")


router.post(
  "/create_post",
  // upload.single("image"),
  VerifyUserMiddleware,
  CreatePostController.createPostRequest
);

router.get("/find_all_posts", FindPostController.findAllPostRequest);

router.get("/find_by_id/:id", FindPostController.findPostByCreatedBy);

router.get("/find_post_by_id/:id", FindPostController.findPostWithId);


router.get("/find_comment/:id", FindCommentPostController.findCommentsPostRequest);

router.get("/find_like", FindUserByLikeController.findUserByLikesRequest);

router.get(
  "/find_by_created_at/:createdAt/:createdBy",
  FindPostController.findByCreatedAtRequest
);

router.get(
  "/find_by_created_by/:createdBy",
  FindPostController.findByNickNameRequest
);

router.patch("/update_post/:id", UserMiddleware, UpdatePostController.updatePostRequest);

router.patch("/update_post/:createdAt/:createdBy", UserMiddleware, updatePostReduxController.updatePostRequest);


router.patch("/update_user_details_in_post", UserMiddleware, UpdateUserDetailsInPostController.updateUserDetailsInPostRequest);

router.patch(
  "/send_like/:id",
  UserMiddleware,
  SendLikeController.sendLikesRequest
);

router.patch(
  "/remove_like/:id",
  UserMiddleware,
  RemoveLikeController.removeLikesRequest
);


router.delete("/delete_post/:id", VerifyUserMiddleware, DeletePostController.deletePostRequest);

router.delete(
  "/delete_post/:createdAt/:createdBy",
  VerifyUserMiddleware,
  DeletePostReduxController.deletePostRequest
);


router.get("/find_post_like/:id", FindUserArr.findUserArrRequest);




module.exports = router;