import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { getHomePage } from "../controllers/homeController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// GET Routes
router.get("/", getHomePage);

export default router;