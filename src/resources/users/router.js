const express = require("express");
const { getAll, getOneById, getUserWithAddress } = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/:id/address", getUserWithAddress);

router.get("/:id", getOneById);

module.exports = router;
