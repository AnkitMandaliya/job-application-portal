import Application from "../models/Application.model.js"

export const applyJob = async (req, res) => {
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
    user: req.user,
    job: jobId,
    resume: req.file.path,
    status: "Applied"
  });

  res.status(201).json(application);
};

export const myApplications = async (req, res) => {
  const applications = await Application.find({ user: req.user })
    .populate("job", "title location");

  res.json(applications);
};
