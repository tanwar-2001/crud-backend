const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mayanktanwar8402:hWkvOFIYxoJsSQzt@backenddb.6t1ps.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the DB");
    app.listen(3000, () => console.log("Listening on port 3000"));
  })
  .catch(() => console.log("Error occured while connecting to the DB"));

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    console.log({ message: error.message });
  }
});
