import mongoose from 'mongoose';
const { Schema } = mongoose;

const jobSchema = new Schema({
  jobTitle: String, 
  jobLocation: String,
  workingTime: String,
  seniorityLevel: {
    type:String ,
    enums: ["junior" ,"mid-level" , "senior" , "team-lead" , "CTO"],
    default: "User"
  } ,
  jobDescription: String,
  technicallSkills: [String],
  softSkills: [String],
  addedBy: String ,
  companyName : String,
  role: {type:String ,
    enums: ["User" , "Company_Hr"],
    default: "User"
  }
});
mongoose.set('strictPopulate', false);

const jobModel = mongoose.model('Job', jobSchema);

export default jobModel ;