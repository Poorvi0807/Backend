const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User =require("../models/user");
dotenv.config();

const register = async(req,res) =>{
    const{ name,email, password, phone_number,department} =req.body;
    try {
        const hashedPassword=await bcrypt.hash(password,10);
        const user = new User({
            name,
            email,
            password,
            phone_number:hashedPassword,
            department
        }) 
        await user.save();
        return res.send({msg : "Register Successfully"});
    } catch (error) {
        return res.send({msg : "Error in Registering"});
    }
}

const login = async(req,res) =>{
    const{email, password} =req.body;
    try {
        const user= await User.findOne({email});
        if(!user){
            return res.send({msg : "User Not Found"});
        }
        const isPasswordCorrect= await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return res.send({msg : "Invalid Credentials"});
        }
        const token = jwt.sign({userId:user_id,}, process.env.JWT_SECRET,{expiresIn:'1h'});
        res.send({token});
    } catch (error) {
        return res.send({msg : "Error in Registering"});
    }
}


module.exports={register,login};