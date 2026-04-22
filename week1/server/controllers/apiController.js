import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addStudent = async (req, res) => {
  try {
    const { name, age } = req.body;

    if (!name || !age) {
      return res
        .status(400)
        .json({ message: "Naam en leeftijd zijn verplicht." });
    }

    //1 Lees het bestand
    const filePath = path.join(__dirname, "..", "data", "data.json");
    const fileData = await fs.readFile(filePath, "utf-8");

    const data = JSON.parse(fileData);

    //2 Voeg de student toe
    const newStudent = { name, age };
    data.push(newStudent);

    //3 Schrijf de nieuwe data terug
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    res.status(201).json({
      message: "Student succesvol toegevoegd",
      student: newStudent,
    });
  } catch (error) {
    console.error("Fout bij het toevoegen van een student: ", error);
  }
};
