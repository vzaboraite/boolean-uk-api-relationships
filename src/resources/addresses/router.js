const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ address: true });
});

module.exports = router;
