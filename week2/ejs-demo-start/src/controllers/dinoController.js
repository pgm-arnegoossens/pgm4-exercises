import path from "path";
import { fileURLToPath } from "url";
import { dinosaurs } from "../data/data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const index = (req, res) => {
  res.render(
    path.join("pages", "index"), {
    dinosaurs }
  );
};

export const detail = (req, res) => {
  const dino = dinosaurs.find(dino => dino.slug === req.params.slug);

  res.render(path.join("pages", "detail"), {dino: dino});
};
