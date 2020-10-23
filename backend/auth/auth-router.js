const router = require("express").Router();

const users = require("./auth-model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("./secret");

router.post("/register", (req, res) => {
  const credentials = req.body;

  const rounds = process.env.HASH_ROUNDS || 6;
  const hash = bcrypt.hashSync(credentials.password, rounds);
  credentials.password = hash;

  users
    .add(credentials)
    .then((user) => {
      res.status(200).json({ datta: user });
    })
    .catch((err) => res.send(err));
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: "8h",
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}

router.post("/login", (req, res) => {
  const credentials = req.body;
  users.findBy({ username: credentials.username }).then((users) => {
    const user = users[0];
    if (user && bcrypt.compareSync(credentials.password, user.password)) {
      const token = generateToken(user);

      req.session.username = user.username;
      res
        .status(201)
        .json({ message: "welcome", username: req.username, token });
    } else res.status(401).json({ message: "invalid credentials" });
  });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res
          .status(500)
          .json({ message: "logout failed please try again later" });
      } else {
        res.status(204).end();
      }
    });
  } else {
    res.status(204).end();
  }
});

module.exports = router;
