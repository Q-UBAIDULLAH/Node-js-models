import mongoose, { mongo } from 'mongoose';
const { schema } = mongoose;
const totdoschema = new schema(
  {
    content:{
      type:String,
      required:true
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
    type:schema.Types.objectId,
    ref:'user'
    },
subtodo:[
  {
   type:schema.Types.ObjectId,
   ref:'subTodo'
},//Array of subtodo
],
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model('Todo', totdoschema);
