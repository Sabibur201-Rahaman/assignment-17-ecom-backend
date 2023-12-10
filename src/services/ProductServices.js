const BrandModel = require("../models/BrandModel");
const CategoryModel=require("../models/CategoryModel")
const mongoose=require('mongoose')
const ObjectId=mongoose.Types.ObjectId;

const BrandListServices=async()=>{
    try {
        let data= await BrandModel.find();
        return {status:"success",data:data}
     }
     catch (e) {
         return {status:"fail",data:e}.toString()
     }
}

const CategoryListServices=async()=>{
    try {
        let data= await CategoryModel.find();
        return {status:"success",data:data}
     }
     catch (e) {
         return {status:"fail",data:e}.toString()
     }
}
module.exports={
    BrandListServices,
    CategoryListServices
}