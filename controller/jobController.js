import Job from "../models/Job.model.js"

export const seedJobs = async (req,res)=>{
    await Job.insertMany([
        { title: "Node.js Developer", description: "REST APIs", location: "Remote" },
        { title: "React Developer", description: "Frontend UI", location: "Ahmedabad" }
    ]);
  res.json({message:"Sample Jobs Added"})
}

export const getJobs = async (req,res)=>{
     const jobs = await Job.find()
     res.json({jobs})
}