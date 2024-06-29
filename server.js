const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send({"Task one":"completed"});
})

app.listen(PORT,()=>{
    console.log(`E-commerce website is listening at port ${PORT}`)
})