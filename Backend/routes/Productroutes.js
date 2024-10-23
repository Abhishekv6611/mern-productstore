import express from "express";
import mongoose from "mongoose";
import Product from "../model/productModel.js";
import {
  deleteProduct,
  getProduct,
  postProduct,
  putProduct,
} from "../controllers/productControllers.js";



const router = express.Router();

router.get("/", getProduct);
router.post("/", postProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

export default router;

