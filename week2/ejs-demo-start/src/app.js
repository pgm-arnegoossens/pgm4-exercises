// import statements
import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";
import router from "./routes/routes.js";
import helpers from "./utils/templateHelpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create an instance of express
const app = express();

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("layout", path.join("layouts", "main.ejs"));
app.set("views", path.join(__dirname, "views"));

Object.assign(app.locals, helpers);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/dinosaurs", router);

// GET route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.resolve("src", "views", "index.html"));
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});
