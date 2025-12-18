import {Router} from "express"
import {authMiddleware}  from "../middleware/authmiddleware.js"
import {applyJob, myApplications} from "../controller/applicationController.js"
import upload from "../config/multer.js"
const router = Router()

router.post("/apply",authMiddleware,upload.single("resume"),applyJob)

router.get("/my",authMiddleware,myApplications)

export default router;
