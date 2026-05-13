import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const home = (req, res) => {
  const data = {
    title: "Leuke titel",
  };

  res.render("pages/home", data);
};
