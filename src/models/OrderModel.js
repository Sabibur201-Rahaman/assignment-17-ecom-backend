const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        validate: {
          validator: Number.isInteger,
          message: '{VALUE} is not an integer value for quantity.'
        },
        min: [1, 'Quantity must be a positive integer.']
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true,
    validate: {
      validator: value => value >= 0,
      message: 'Total amount must be a positive value.'
    }
  },
  shippingAddress: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'Pending'
  }
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
