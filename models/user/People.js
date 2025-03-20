const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peopleSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,      
      trim: true,
    },
    email: {
      type: String,      
      trim: true,
    },
    job: {
      type: String,      
      trim: true,
    },        
  },
  {
    timestamps: true,
  }
);

const People = mongoose.model("People", peopleSchema);

module.exports = People;
