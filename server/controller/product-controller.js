import Products from '../model/product-schema';

const getProducts =async(request, response) =>{
 try{
   const products= await Products.find({});
   response.status(200).json(products);
 }catch(error){
    response.status(500).json({message: error.message});
 }
};

export default getProducts;