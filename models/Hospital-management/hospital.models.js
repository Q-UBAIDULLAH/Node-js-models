import mongoose from 'mongoose'
const {Schema}=mongoose
const hospitalschema=new Schema({
name:{
  type:String,
  required:true
},
address:{
  type:String,
  required:true
},
city:{
  type:String,
  required:true
},
pincode:{
  type:String,
  required:true
},
specializein:[
  {
    type:String
  }
]
  

},
{
timestamps:true
})

export const Hospital=mongoose.model('hospital',hospitalschema)