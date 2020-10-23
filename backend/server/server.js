const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const protectedMiddleware = require("../auth/protected");

const server = express();

const authRouter = require("../auth/auth-router");
const todoRouter = require("../router/todoRouter");
const groceryRouter = require("../router/groceryRouter.js");

const sessionConfiguration = {
  name: "todo-grocery",
  secret: process.env.SESSION || "dont mention my name",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 25,
    secure: process.env.SECURE_COOKIES || false,
  },
  resave: false,
  saveUninitialized: true,
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfiguration));

server.use("/api/auth", authRouter);
server.use("/api/todo", protectedMiddleware, todoRouter);
server.use("/api/grocery", protectedMiddleware, groceryRouter);

server.get("/", (req, res) => {
  res.json({ api: "up", session: req.session });
});

module.exports = server;
