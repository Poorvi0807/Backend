const express = require("express");
const dotenv = require("dotenv");
const mongoose= require("mongoose");
const bodyParser=require("body=parse");
dotenv.config();
const routes= require("./routes/authRoutes");
const cors= require("cors");
const app= express();
mongoose.connect(process.env.MONGO_URL);
app.use(bodyParser.json());

app.listen(8080, () =>{
    console.log(`Server is running on the 8080`);
})