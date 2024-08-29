import mongoose from 'mongoose';
const { Schema } = mongoose;

const applicationSchema = new Schema({
  userId: String, 
  userTechSkills: [String],
  userSoftSkills: [String],
  userResume: String,
  role: String
});

const applicationModel = mongoose.model('application', applicationSchema);

export default applicationModel ;