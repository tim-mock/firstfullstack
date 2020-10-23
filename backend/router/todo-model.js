const db = require("../server/connection");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("todolist");
}

function findById(id) {
  return db("todolist").where({ id: id }).first();
}

function add(item) {
  return db("todolist")
    .insert(item, "id")
    .then((ids) => {
      const id = ids[0];
      return findById(id);
    });
}

function update(changes, id) {
  return db("todolist").where({ id }).update(changes);
}

function remove(id) {
  return db("todolist").where({ id }).del();
}
