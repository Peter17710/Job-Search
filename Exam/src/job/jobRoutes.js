import express from "express"
import * as JC from "./jobControllers.js"
import validate from "../../middleware/validation.js";
import { jobValidation } from "./jobValidation.js";
import authHr from "../../middleware/authHR.js";
import { applicationValidation } from "../application/applicationValidation.js";
import auth from "../../middleware/auth.js";
import authUser from "../../middleware/authUser.js";
const jobRouter = express.Router();

jobRouter.post("/addJob" , authHr  , validate(jobValidation) ,  JC.addJob)
jobRouter.patch("/updateJob/:id" , authHr  ,JC.updateJob)
jobRouter.delete("/deleteJob/:id" , authHr  ,JC.deleteJob)
jobRouter.get("/getAllJobs" , auth  ,JC.getAllJobs)
jobRouter.get("/getCompanyByName" , auth  ,JC.getCompanyByName)
jobRouter.get('/jobFilter'  , auth , JC.jobFilter)
jobRouter.post('/applyJob', authUser  , validate(applicationValidation)  , JC.applyJob)





export default jobRouter ;