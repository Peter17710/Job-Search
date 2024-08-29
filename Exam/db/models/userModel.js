import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String, 
  lastName: String,
  userName: String,
  email: String,
  password: String,
  recoveryEmail: String,
  DOB: { type: Date, default: Date.now },
  mobileNumber: String,
  role: {type:String ,
    enums: ["User" , "Company_Hr"],
    default: "User"
  } ,
  status: String ,
  OTP: String
  
});

const userModel = mongoose.model('Users', userSchema);

export default userModel ;