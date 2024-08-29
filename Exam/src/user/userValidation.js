import Joi from "joi"



export const  sighnUpValidation = Joi.object({


    firstName: Joi.string().required(), 
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required().pattern(/^[A-Z][A-Za-z0-9]/),
    recoveryEmail: Joi.string().required(), 
    DOB: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    role: Joi.string() ,
    status: Joi.string().required(),
    OTP: Joi.string()

})


export const  loginValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required().pattern(/^[A-Z][A-Za-z0-9]/),
})