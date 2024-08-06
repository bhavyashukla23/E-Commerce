import mongoose from "mongoose";

//validating data
const productSchema= new mongoose.Schema({
    id:String,
    url:String,
    detaialUrl:String,
    title:String,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
});

const Product = mongoose.model(`product`,productSchema);

export default Product;