module.exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
    })
    .createTable("todolist", (tbl) => {
      tbl.increments();
      tbl.string("task", 128).notNullable();
      tbl.boolean("completed");
      tbl
        .integer("user")
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("groceries", (tbl) => {
      tbl.increments();
      tbl.string("item", 128).notNullable();
      tbl.boolean("purchased");
      tbl
        .integer("user")
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

module.exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("groceries")
    .dropTableIfExists("todolist")
    .dropTableIfExists("users");
};
