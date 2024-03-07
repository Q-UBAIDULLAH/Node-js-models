import mongoose from 'mongoose';
const { Schema } = mongoose;
const Doctorschema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
    workinhospital: [
      {
        type: Schema.Types.ObjectId,
        ref: 'hospital',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const doctor = mongoose.model('doctor', Doctorschema);
