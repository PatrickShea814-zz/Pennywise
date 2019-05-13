let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let wishItemSchema = new Schema({

  //item id auto generated by mongo
  userID: {
    type: String,
    trim: true
  },
  wishName: {
    type: String,
    trim: true
  },
  wishURL: {
    type: String,
    trim: true
  },
  wishPrice: {
    type: Number,
    trim: true
  },
  wishPhoto: {
    type: String,
    trim: true
  }
});

let WishItem = mongoose.model("WishItem", wishItemSchema);

module.exports = WishItem;