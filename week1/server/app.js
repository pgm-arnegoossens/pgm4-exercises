import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/routes.js";
import apiRouter from "./routes/apiRoutes.js";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const HOST = "localhost";
const PORT = process.env.PORT || 2000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set("layout", path.join("layouts", "main.ejs"));
app.set("views", path.join(__dirname, "views"));

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