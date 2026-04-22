import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { addStudent } from "../controllers/apiController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiRouter = express.Router();

apiRouter.post("/students", addStudent)

export default apiRouter;