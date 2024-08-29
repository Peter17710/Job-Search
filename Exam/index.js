import express from "express"
import { configDotenv } from "dotenv";
import connectionDb from "./db/connection.js";
import userRouter from "./src/user/userRoutes.js";
import companyRouter from "./src/company/companyRoutes.js";
import jobRouter from "./src/job/jobRoutes.js";
import fileUpload from "./middleware/multer.js";
import userModel from "./db/models/userModel.js";


const app = express();
connectionDb()
app.use(express.json())
app.use(userRouter)
app.use(companyRouter)
app.use(jobRouter)

app.use(express.static('https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg'))



app.post('/cloudinary', fileUpload().single('pdf'), async function (req, res, next) {
    req.body.img = req.file.filename
    let addedUser = await userModel.insertMany(req.body)
    res.json({ message: "user added successfully", data: addedUser })
})



app.use("*" ,  (req,res,next)=>{
    res.status(404).json("4o4 not found!")
})

let port = 3000 ;
const env = process.env.PROD_PORT;


app.listen(3000 , ()=>{
    console.log(`server is in ${env} mode on ${port}`);
})