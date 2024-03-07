import mongoose from 'mongoose'
const {Schema}=mongoose
const medicalrecord=new Schema({

},
{
timestamps:true
})

export const medrecord=mongoose.model('Medical',medicalrecord)