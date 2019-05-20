const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  { 
    item_id: String,
    used: Boolean,  
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("car", DataSchema);
