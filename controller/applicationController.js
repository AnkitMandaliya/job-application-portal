import Application from "../models/Application.model.js"

export const applyJob =async (req,res)=>{
    const application = await Application.create({
        user: req.user,
        job :req.body.jobId,
        resume:req.file.path
    })
    res.json({application})
}

export const myApplications = async (req,res)=>{
    const apps =await Application.find({user:req.user}).populate("job");
    res.json(apps);
} 