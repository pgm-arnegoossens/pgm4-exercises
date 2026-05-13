import knex from "../lib/Knex.js";
import { Model } from "objection";

Model.knex(knex);

class Page extends Model {
  static get tableName() {
    return "pages";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "is_homepage"],
      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1, maxLength: 255 },
        slug: { type: "string", maxLength: 255 },
        content: { type: "string" },
        is_homepage: { type: "boolean" },
      },
    };
  }
}

export default Page;
