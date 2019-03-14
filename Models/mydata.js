const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  costprice: {
    type: Number
  },
  sellingprice: {
    type: Number
  }
});
const product = (module.exports = mongoose.model("product", ProductSchema));
