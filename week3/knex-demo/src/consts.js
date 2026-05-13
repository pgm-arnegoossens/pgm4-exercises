import path from "path";

export const SOURCE_PATH = path.resolve("src");
export const VIEWS_PATH = path.resolve(SOURCE_PATH, "views");
export const PUBLIC_PATH = path.resolve("public");
export const PORT = process.env.PORT || 3000;
