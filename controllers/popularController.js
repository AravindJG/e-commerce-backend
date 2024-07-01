const Popular = require("../models/popularModel");
const asyncHandler = require("express-async-handler");

const getPopulars = asyncHandler(async (req,res)=>{
    try{
        const populars = await Popular.find({});
        res.status(200).json(populars);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = getPopulars;