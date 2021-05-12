const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", schema);
