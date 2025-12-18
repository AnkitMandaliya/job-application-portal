import mongoose from "mongoose"

const jobschema = new mongoose.Schema({
    title: String,
    description: String,
    location: String
})

export default mongoose.model("Job",jobschema)