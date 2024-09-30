import axios from 'axios';

const URL ="http://localhost:8000";

export const authenticateSignup =async(user)=>{
    try{
        console.log(user);
        return await axios.post(`${URL}/signup`,user);
    }catch(error){
        console.log("Error from api",error.message);
    }
};

export const authenticateLogin = async(data) => {
 try{
    return await axios.post(`${URL}/login`, data);
 }catch(error){
    console.log("Error while calling Login api" , error);
    return error.response;
 }
};