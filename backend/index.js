// const express = require("express");
// const server = express();

require("dotenv").config();

const server = require("./server/server");

const port = process.env.PORT || 5000;

// server.use(express.json());

// server.use("/", (req, res) => {
//   res.send("welcome to my todo and grocery app");
// });

server.listen(port, () => {
  console.log("server is up");
});
