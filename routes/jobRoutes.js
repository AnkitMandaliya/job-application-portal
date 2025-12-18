import { Router } from "express";
import {getJobs ,seedJobs} from "../controller/jobController.js"

const router = Router()
router.post("/seed",seedJobs)
router.get("/",getJobs)

export default router