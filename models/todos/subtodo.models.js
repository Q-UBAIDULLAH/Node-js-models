import mongoose from 'mongoose';
const { schema } = mongoose;
const subtodoschema = new schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdby: {
      type: schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
);

export const subtodo = mongoose.model('subTodo', subtodoschema);
