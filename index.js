const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://mayanktanwar8402:hWkvOFIYxoJsSQzt@backenddb.6t1ps.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the DB");
    app.listen(3000, () => console.log("Listening on port 3000"));
  })
  .catch(() => console.log("Error occured while connecting to the DB"));

app.use("/api/products", productRoute);
