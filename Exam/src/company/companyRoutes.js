import express from "express"
import * as RC from "./companyController.js"
import validate from "../../middleware/validation.js";
import { companyValidation } from "./companyValidation.js";
import authHr from "../../middleware/authHR.js";
import auth from "../../middleware/auth.js";
const companyRouter = express.Router();

companyRouter.post("/addCompany", authHr , validate(companyValidation),RC.addCompany)
companyRouter.patch("/updateCompany/:id", authHr ,RC.updateCompany)
companyRouter.delete("/deleteCompany/:id", authHr ,RC.deleteCompany)
companyRouter.get("/getCompanyById/:id", authHr ,RC.getCompanyById)
companyRouter.get("/getCompanyDataByName", auth ,RC.getCompanyDataByName)
companyRouter.get("/get_S_job", authHr ,RC.get_S_job)

 







export default companyRouter ;