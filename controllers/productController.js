const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

const getProducts = asyncHandler(async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = { createProduct, getProducts };