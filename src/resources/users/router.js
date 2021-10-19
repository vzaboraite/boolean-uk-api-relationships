const express = require("express");
const {
  getAll,
  getOneById,
  getUserWithAddress,
  getUserWithOrders,
} = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/:id/address", getUserWithAddress);

router.get("/:id/orders", getUserWithOrders);

router.get("/:id", getOneById);

module.exports = router;
