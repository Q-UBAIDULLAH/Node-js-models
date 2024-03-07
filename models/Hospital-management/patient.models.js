import mongoose from 'mongoose'
const {Schema}=mongoose
const patientschema=new Schema({
name:{
  type:String,
  required:true
},
diagonceWidth:{
  type:String,
  required:true
},
address:{
  type:String,
  required:true
},
age:{
  type:Number,
  required:true
},
bloodgroup:{
type:String,
required:true
},
gender:{
  type:String,
  enum:['M','F','O'],
  required:true
},
admittedin:{
  type:Schema.Types.ObjectId,
  ref:'hospital'
},
},
{
timestamps:true
})

export const patients=mongoose.model('patient',patientschema)