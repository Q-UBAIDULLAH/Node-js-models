import mongoose from 'mongoose';
const { schema } = mongoose;
const CategorySchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const user = mongoose.model('Category', CategorySchema);
