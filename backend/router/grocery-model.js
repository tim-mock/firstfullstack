const db = require("../server/connection");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("groceries");
}

function findById(id) {
  return db("groceries").where({ id: id }).first();
}

function add(item) {
  return db("groceries")
    .insert(item, "id")
    .then((ids) => {
      const id = ids[0];
      return findById(id);
    });
}

function update(changes, id) {
  return db("groceries").where({ id }).update(changes);
}

function remove(id) {
  return db("groceries").where({ id }).del();
}
