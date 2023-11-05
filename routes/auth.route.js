import express from "express";
import {
  login,
  passwordResetLink,
  register,
  resetPassword,
  verifyPasswordResetLink,
  verifyTokenSentToEmail,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/:id/verify/:token/", verifyTokenSentToEmail);
router.post("/password-reset", passwordResetLink);
router.get("/password-reset/:id/:token", verifyPasswordResetLink);
router.post("/password-reset/:id/:token", resetPassword);

export default router;
