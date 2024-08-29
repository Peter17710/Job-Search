import Joi from "joi"


export const  jobValidation = Joi.object({

  jobTitle: Joi.string().required(), 
  jobLocation: Joi.string().required(),
  workingTime: Joi.string().required(),
  seniorityLevel:Joi.string().required() ,
  jobDescription: Joi.string().required(),
  technicallSkills: Joi.required(),
  softSkills: Joi.required(),
  addedBy: Joi.string().required() ,
  role: Joi.string().required() ,
  companyName : Joi.string().required()

})