const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, required: true },
  quantity: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value for quantity.",
    },
    min: [1, "Quantity must be a positive integer."],
  },
});

const CartItem = mongoose.model("cartItems", cartItemSchema);

module.exports = CartItem;
