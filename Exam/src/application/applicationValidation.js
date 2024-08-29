import Joi from "joi"


export const  applicationValidation = Joi.object({

  userId: Joi.string().required(), 
  userTechSkills: Joi.required(),
  userSoftSkills: Joi.required(),
  userResume:Joi.string().required() ,
  role : Joi.string().required() 

})