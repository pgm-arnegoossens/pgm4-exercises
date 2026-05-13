const tableName = "pages";

export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("slug");
        table.string("content");
        table.boolean("is_homepage").defaultTo(false).notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable(tableName);
}
