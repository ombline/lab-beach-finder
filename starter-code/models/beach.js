const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beachSchema = new Schema({
  name: String,
  flag: String
  -> possible values: "red", "yellow", "green"
});

const Beach = mongoose.model("Beach", beachSchema);
module.exports = Beach;
