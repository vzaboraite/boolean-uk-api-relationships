require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const addressesRouter = require("./resources/addresses/router");
const ordersRouter = require("./resources/orders/router");
const usersRouter = require("./resources/users/router");
const app = express();

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* SETUP ROUTES */

app.use("/addresses", addressesRouter);
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
