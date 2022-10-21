require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const app = express();

app.use(express.json());
mongoose.connect(process.env.MONGODB_URI);

/*
 * * Routes
 */

const allOfferRoutes = require("./route/offer");
const allUserRoutes = require("./route/user");

app.use(allOfferRoutes);
app.use(allUserRoutes);

/*
 * * Default routing
 */

app.all("*", (req, res) => {
  res.json({ message: "Route is  not found" });
});

/*
 * * Listen
 */

app.listen(3000, () => {
  console.log("Server has start");
});
