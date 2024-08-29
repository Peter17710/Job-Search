import jobModel from "../../db/models/jobModel.js"


export  const addJob = (req,res,next)=>{
    const added = jobModel.insertMany(req.body)
    res.status(208).json({message:"added" , added})
}

export const updateJob = async(req,res,next)=>{
    const {id} = req.params
    const updated = await jobModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(202).json({message:"updated" , updated})
}

export const deleteJob = async(req,res,next)=>{
    const {id} = req.params
    
    const deleted = await jobModel.findByIdAndDelete(id)
    res.status(202).json({message:"deleted" , deleted})
}

export const getAllJobs = async(req,res,next)=>{
    const done = await jobModel.find({})
    res.status(200).json({message:"done" , done})
}

export const getCompanyJob = async(req,res,next)=>{
    const done = await jobModel.find({}).populate("")
    res.status(200).json({message:"done" , done})
}

export const getCompanyByName = async(req,res,next)=>{
    const {companyName} = req.query
    const done = await jobModel.findOne({companyName})
    res.status(201).json({message:"done" , done})
}

export const jobFilter =  async (req, res) => {
    try {
        const { workingTime, jobLocation, seniorityLevel, jobTitle } = req.body;
        const filter = {};
   if (workingTime) filter.workingTime = workingTime;
   if (jobLocation) filter.jobLocation = jobLocation;
   if (seniorityLevel) filter.seniorityLevel = seniorityLevel;
   if (jobTitle) filter.jobTitle = jobTitle;
   
        const jobs = await jobModel.find(filter).populate('Company');
        res.status(204).json(jobs);
    } catch (err) {
        res.status(402).json({ message: err.message });
    }}

    import applicationModel from "../../db/models/applicationModel.js"


    export  const applyJob = (req,res,next)=>{
      const applied = applicationModel.insertMany(req.body)
      res.status(202).json({message:"applied"})
    }

    