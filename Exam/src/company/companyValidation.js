import Joi from "joi"


export const  companyValidation = Joi.object({

    companyName: Joi.string().required(), 
    description: Joi.string().required(),
    industry: Joi.string().required(),
    address: Joi.string().required(),
    numberOfEmployees: Joi.string().required(),
    companyEmail: Joi.string().required(), 
    role: Joi.string().required(), 
    companyHR: Joi.string().required()
   

})