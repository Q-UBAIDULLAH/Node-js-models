import mongoose from 'mongoose';
const { Schema } = mongoose;

const productitemSchema = new Schema({
  //ye isliye ke hme pata chle ke kitne item order kre hen quantity
  productid: {
    type: Schema.Types.ObjectId,
    ref: 'product',
  },
  order: {
    type: Number,
    required: true,
  },
});

const orderschema = new Schema(
  {
    orderprice: {
      type: Number,
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    orderitems: {
      type: [productitemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'delivered', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);
export const orders = mongoose.model('order', orderschema);
