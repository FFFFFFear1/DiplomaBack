const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    DATA: { type: String, required: true },
    TIME: { type: String, required: true },
    ATT: { type: Number, required: true },
    MED: { type: Number, required: true },
    MaxATT: { type: Number, required: true },
    MaxMED: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sessionData", schema);
