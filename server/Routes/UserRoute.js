import express from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
} from "../Controllers/UserController.js";
const router = express.Router();
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
export default router;
