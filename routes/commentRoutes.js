
import express from 'express';
const router = express.Router();
import {createComment, updateComment, deleteComment, getAllComments } from "../controllers/commentControllers";
import {adminGuard, authGuard } from "../middleware/authMiddleware";


router
.route("/")
.post( authGuard,createComment)
.get(authGuard, adminGuard,getAllComments);
router.route("/:commentId").put(authGuard, updateComment).delete(authGuard, deleteComment);


 export default router;