import express from "express";
import { registerAdminToken } from "../controllers/AdminController.js";

const router = express.Router();

router.post("/register-token", registerAdminToken);

export default router;
