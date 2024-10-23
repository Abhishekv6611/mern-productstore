import Product from "../model/productModel.js";
import mongoose from "mongoose";

export const getProduct=async(req,res)=>{
    try {
       const GetProduct=await Product.find({})
       return res.status(201).json({success:true,message:"successfuly finded",Data:GetProduct})
    } catch (error) {
      console.log(error);
      return res.status(501).json({success:false,message:"Server Error"})
    }
}

export const postProduct=async(req,res)=>{
    const product=req.body;
  
    if(!product.name || !product.image || !product.price){
      return res.status(400).send({success:false,message:"Please fill the all category"})
    }
    const newProduct=new Product(product)
    try {
      await newProduct.save()
      return res.status(200).json({success:true,Data:newProduct})
    } catch (error) {
      console.error(error)
      return res.status(500).json({success:false,message:"Server responding Error"})
    }
  }


  export const putProduct=async(req,res)=>{
    const {id}=req.params
    const product=req.body
   
     if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({sucess:false,message:"User ID is invalid"})
     }
  
    try {
        const UpdatedProduct=await Product.findByIdAndUpdate(id,product,{new:true})
        return res.status(201).json({success:true,Data:UpdatedProduct})
    } catch (error) {
      console.log(error)
      return res.status(501).json({success:true,Message:"Server response is Bad"})
    }
  }


  export const deleteProduct=async(req,res)=>{
    const {id}=req.params
    try{
       await Product.findByIdAndDelete(id)
       return res.status(201).json({success:true,message:"Successfully Deleted Iteams"})
    }catch(error){
      return res.status(501).json({success:false,message:"Server has an Error"})
    }
  }