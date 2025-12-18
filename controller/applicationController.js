import Application from "../models/Application.model.js"
import mongoose from "mongoose";
import Job from "../models/Job.model.js"
export const applyJob = async (req, res) => {
    console.log("REQ.BODY =>", req.body);
  console.log("JOB ID =>", req.body.jobId);
  const { jobId } = req.body;


  if (!jobId) {
    return res.status(400).json({ message: "Job ID is required" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "Resume is required" });
  }

  const exists = await Application.findOne({
    user: req.user,
    job: jobId
  });

  if (exists) {
    return res.status(400).json({
      message: "You have already applied for this job"
    });
  }

  const application = await Application.create({
     user: new mongoose.Types.ObjectId(req.user),
    job: new mongoose.Types.ObjectId(jobId),
    resume: req.file.path,
    status: "Applied"
  });

  res.status(201).json(application);
};

export const myApplications = async (req, res) => {
  console.log("🔥 API HIT");
  console.log("USER ID:", req.user);

  const applications = await Application.find({
    user: new mongoose.Types.ObjectId(req.user)
  }).populate("job","title location")

  console.log("APPLICATION COUNT:", applications.length);

  

  res.json(applications);
};

