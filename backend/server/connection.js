const knex = require("knex");

const knexfile = require("../knexfile");
const enviorment = process.env.NODE_ENV || "development";

module.exports = knex(knexfile[enviorment]);
