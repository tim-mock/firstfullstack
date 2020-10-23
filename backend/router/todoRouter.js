const express = require("express");

const router = express.Router();

const db = require("./todo-model");

router.get("/", (req, res) => {
  db.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  const data = req.body;
  db.add(data)
    .then((add) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  db.update(changes, id)
    .then((change) => {
      res.status(202).json(change);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then((deleted) => {
      res.status(204).json({ removed: deleted });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete task" });
    });
});

module.exports = router;
