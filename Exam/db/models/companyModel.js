import mongoose from 'mongoose';
const { Schema } = mongoose;

const companySchema = new Schema({
  companyName: String, 
  description: String,
  industry: String,
  address: String,
  numberOfEmployees: String,
  companyEmail: String,
  companyHR: String,
  role: {type:String ,
    enums: ["User" , "Company_Hr"],
    default: "User"
  }

});

const companyModel = mongoose.model('Company', companySchema);

export default companyModel ;