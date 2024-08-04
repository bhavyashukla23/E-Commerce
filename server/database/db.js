// import mongoose from "mongoose";

// export const Connection=async()=>{
//     try{
//         const URL="mongodb+srv://bhavyashukla23:<Mongodb@123>@e-commerce.kos9f1a.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce";
//         await mongoose.connect(URL);
//         console.log("Database connected successfully");
//     }catch(error){
//         console.log("Error while connecting with db..."+error.message);
//     }
// };

// export default Connection;

import mongoose from "mongoose";

export const Connection = async () => {
    try {
        const URL = "mongodb+srv://bhavya:Mongodb%40123@e-commerce.kos9f1a.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce";
        await mongoose.connect(URL, {});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with db... " + error.message);
    }
};

export default Connection;