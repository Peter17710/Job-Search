import companyModel from "../../db/models/companyModel.js"
import jobModel from "../../db/models/jobModel.js"


    export  const addCompany = (req,res,next)=>{
        const added = companyModel.insertMany(req.body)
        res.status(201).json({message:"added" , added})
    }

    export const updateCompany = async(req,res,next)=>{
        const {id} = req.params
        const updated = await companyModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json({message:"updated" , updated})
    }

    export const deleteCompany = async(req,res,next)=>{
        const {id} = req.params
        
        const deleted = await companyModel.findByIdAndDelete(id)
        res.status(203).json({message:"deleted" , deleted})
    }

    export const getCompanyDataByName = async(req,res,next)=>{
        const {companyName} = req.body
        const done = await companyModel.findOne({companyName})
        res.status(201).json({message:"done" , done})
    }

    export const getCompanyById = async(req,res,next)=>{
        const {id} = req.params
        const done = await companyModel.findById(id)
        res.status(204).json({message:"done" , done})
    }

    export const get_S_job = async(req,res,next)=>{
        const {companyName , jobTitle} = req.body
        const jobs = await jobModel.findOne({companyName: companyName , jobTitle:jobTitle})
        res.status(201).status(202).json({message:"done" , jobs})
    }
    
