import express from "express";
import {
  createSpellWord,
  getAllSpellWords,
  updateSpellWord,
  deleteSpellWord,
} from "../controllers/spellWord.controller.js";

const router = express.Router();

router.post("/", createSpellWord); // Thêm từ mới
router.get("/", getAllSpellWords); // Lấy danh sách từ
router.put("/:id", updateSpellWord); // Cập nhật từ
router.delete("/:id", deleteSpellWord); // Xóa từ

export default router;
