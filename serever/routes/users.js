import express from "express";
import {
  getUser,
  login,
  allUsers,
  removeUser,
  addUser,
  modernizeUser,
  addPost,
  allPosts,
  about,
  addAbout
} from "../controllers/users.js";

const router = express.Router();

router.post("/addAbout", addAbout);
router.get("/about", about);
router.post("/login", login);
router.post("/addPost", addPost);
router.get("/allPosts", allPosts);
router.post("/addUser", addUser);
router.get("/user/:id", getUser);
router.delete("/delete/:id", removeUser);
router.get("/all", allUsers);
router.post("/updateUser/:id", modernizeUser);

export default router;
