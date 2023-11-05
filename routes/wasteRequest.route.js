import express from "express";
import {
  changeStatus,
  createWasteRequest,
  deleteWasteRequest,
  getAllWasteRequest,
  updateWasteRequest,
} from "../controllers/wasteRequest.controller.js";

const router = express.Router();

router.post("/add", createWasteRequest);
router.get("/all", getAllWasteRequest);
router.put("/update/:id", updateWasteRequest);
router.delete("/delete/:id", deleteWasteRequest);
router.put("/verify/:id", changeStatus);
export default router;
