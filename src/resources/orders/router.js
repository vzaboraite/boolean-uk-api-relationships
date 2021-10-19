const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ order: true });
});

module.exports = router;
