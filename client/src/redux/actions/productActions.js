import axios from 'axios';
import * as actionTypes from '../constants/productConstants';

const URL = "http://localhost:8000";

export const getProducts= () => async(dispatch) =>{
 try{
   let {data}= await axios.get(`${URL}/products`);
   //console.log(response);
   dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data})
 }catch(error){
    //console.log('Error while calling Products api ', error.message);
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload:error.message})
   }
};

// let obj = {
//    config:{},
//    data: [],
//    headers :{},
//    status :200,
//    message:''

// }

// obj.data
// {data}=obj;