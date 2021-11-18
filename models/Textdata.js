const mongoose = require("mongoose");

const TextdataSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
  },
});
module.exports = Textdata = mongoose.model("textdata", TextdataSchema);
