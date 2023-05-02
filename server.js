/** @format */

import express from "express";
import { resolve } from "path";
import products from "./products.js";

const app = express();
const PORT = 5005;
// console.log(products);
const __dirname = resolve();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  // res.send(`Welcome to the page I call home`);
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  // option 1
  res.json({
    status: "success",
    code: 200,
    data: {
      result: products,
    },
  });
  // option 2
  // res.json(products);
  // option 3
  //   res.send(products);
});

app.get("/contact", (req, res) => {
  res.send(__dirname);
});

app.post("/", (req, res) => {
  if (req.body.username !== "" && req.body.password !== "") {
    res.send(` “Welcome, ${req.body.username}!”`);
  } else {
    res.send(`pls enter your name and password`);
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
