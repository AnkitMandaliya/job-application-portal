import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB Connected");
  console.log("CONNECTED TO DB:", mongoose.connection.host);
console.log("DB NAME:", mongoose.connection.name);

};

export default connectDB;
