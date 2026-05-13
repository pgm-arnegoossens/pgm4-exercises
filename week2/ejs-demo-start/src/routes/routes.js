import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { detail, index } from "../controllers/dinoController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// GET Routes
router.get("/", index);
router.get("/:slug", detail);

export default router;