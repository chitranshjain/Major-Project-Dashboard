const mongoose = require("mongoose");

let db;

const connectDB = async (callback) => {
  mongoose
    .connect(process.env.MONGODB)
    .then((_db) => {
      db = _db;
      return "Connected to MongoDB";
    })
    .then((message) => {
      console.log(message);
      callback();
    })
    .catch((err) => {
      console.log(`Error connecting to MongoDB, ERROR : ${err.message}`);
    });
};

module.exports = { db, connectDB };
