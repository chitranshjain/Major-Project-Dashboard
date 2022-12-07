const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { connectDB } = require("./utils/db");
const bodyParser = require("body-parser");
const Crime = require("./models/crime");

const app = express();
dotenv.config();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res, next) => {
  res.render("home");
});

app.get("/report", (req, res, next) => {
  res.render("report");
});

app.post("/report", async (req, res, next) => {
  let crime = req.body;
  let newCrime = new Crime(crime);
  await newCrime.save();
  res.render("report");
});

app.get("/hotspots", (req, res, next) => {
  res.sendFile(path.join(__dirname, "map13.html"));
});

connectDB(() => {
  app.listen(3000, () => {
    console.log("listening on port 3000");
  });
});
