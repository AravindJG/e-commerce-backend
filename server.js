const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/productRoute");

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',productRoute);

mongoose.set("strictQuery",false);
mongoose.connect(MONGO_URL)
        .then(()=>{
            console.log("Connected to mongodb");
            app.listen(PORT, ()=>{
                console.log(`E-commerce website is listening at port ${PORT}`)
            })
        }).catch((error)=>{
            console.log(error);
        })
