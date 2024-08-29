import mongoose from "mongoose";

const connectionDb = ()=>{


    mongoose.connect('mongodb://localhost:27017/jobSearchApp').then(()=>{
        console.log('connected to db');
    }).catch((err)=>{

        console.log(err);
    })

}


export default connectionDb;