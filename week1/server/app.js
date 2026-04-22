import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/routes.js";
import apiRouter from "./routes/apiRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const HOST = "localhost";
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", router);
app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server draait op http://${HOST}:${PORT}`);
});
