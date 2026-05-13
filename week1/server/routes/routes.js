import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { home } from "../controllers/homeController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// GET Routes
router.get("/", home);

export default router;