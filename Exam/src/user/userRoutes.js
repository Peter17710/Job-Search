import express from "express"
import * as UC from "./userController.js"
import { loginValidation, sighnUpValidation } from "./userValidation.js"
import validate from "../../middleware/validation.js"
import auth from "../../middleware/auth.js"

const userRouter = express.Router()


userRouter.post("/signUp" , validate(sighnUpValidation) , UC.signUp)
userRouter.post("/signIn" , validate(loginValidation) , UC.signIn)
userRouter.patch("/updateUser/:id" ,auth, UC.updateUser)
userRouter.delete("/deleteUser/:id" ,auth, UC.deleteUser)
userRouter.get("/getUserData" ,auth, UC.getUserData)
userRouter.get("/getUserById/:id" , UC.getUserById)
userRouter.get("/getSpecificUser" , UC.getSpecificUser)
userRouter.patch("/updatePassword"  , UC.updatePassword)
userRouter.patch("/forgotPassword"  , UC.forgotPassword)




export default userRouter ;