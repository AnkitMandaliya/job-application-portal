import User from "../models/User.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const register = async (req,res)=>{
    const {name, email , password}=req.body;
    if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }
    const hashed =await bcrypt.hash(password,10);
    await User.create({name,email,password:hashed})
    res.json({message:"User registered succesfully "});
}


export const login = async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password"
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid email or password"
    });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};
