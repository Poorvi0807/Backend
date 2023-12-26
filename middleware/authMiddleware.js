const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();

const authenticateUser = (req,res,next) => {
    const token = req.header("Authorization");
    if(!token){
        return res.send({msg : "AccessDenied"});
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
        
    } catch (error) {
        return res.send({msg : "InvalidToken"});
    }
}

module.exports= authenticateUser;