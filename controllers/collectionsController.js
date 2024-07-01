const NewCollection = require("../models/newCollectionModel");
const asyncHandler = require("express-async-handler");

const getCollections = asyncHandler(async (req,res)=>{
    try{
        const collections = await NewCollection.find({});
        res.status(200).json(collections);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = getCollections;