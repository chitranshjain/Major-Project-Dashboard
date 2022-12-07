const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const crimeSchema = new Schema(
  {
    crimeType: String,
    latitude: Number,
    longitude: Number,
  },
  { timestamps: true }
);

let Crime = mongoose.model("Crime", crimeSchema);

module.exports = Crime;
