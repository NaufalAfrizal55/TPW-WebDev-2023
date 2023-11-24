const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
      unique: true,
    },
  });
  
  export default mongoose.model("Category", categorySchema);