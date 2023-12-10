

const {BrandListServices,CategoryListServices}=require('../services/ProductServices')

exports.ProductBrandList=async(req,res)=>{
    let result=await BrandListServices();
    return res.status(200).json(result)
}

exports.ProductCategoryList=async(req,res)=>{
    let result=await CategoryListServices();
    return res.status(200).json(result)
}

