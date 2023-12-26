const express= require("express");
const authController= require("../controller/authController");

const router= express.Router();

router.post("/register",authController.user);

router.post("/login",authController.register);
module.exports=router;