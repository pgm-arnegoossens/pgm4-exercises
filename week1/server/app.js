import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const HOST = "localhost";
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);

app.listen(PORT, () => {
console.log(`Server draait op http://${HOST}:${PORT}`);
});
