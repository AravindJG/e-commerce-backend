const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/productRoute");
const popularRoute = require("./routes/popularRoute");
const collectionsRoute = require("./routes/collectionsRoute");

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const FRONTEND = process.env.FRONTEND


const app = express();

const corsOptions = { 
    origin: FRONTEND, 
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',productRoute);
app.use('/popular',popularRoute);
app.use('/collections',collectionsRoute);

mongoose.set("strictQuery",false);
mongoose.connect(MONGO_URL)
        .then(()=>{
            console.log("Connected to mongodb");
            app.listen(PORT, ()=>{
                console.log(`E-commerce backend is listening at port ${PORT}`)
            })
        }).catch((error)=>{
            throw new Error(error.message);
        })
