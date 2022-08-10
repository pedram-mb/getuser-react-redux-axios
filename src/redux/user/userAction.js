import { RECEIVE_ERROR_USER, RECEIVE_RESPONSE_USER, SEND_REQUEST_USER } from "./userType";
import axios from 'axios';

export const sendRequestUser = ()=>{
    return{
        type : SEND_REQUEST_USER
    }
}
export const receiveResponeUser = (data)=>{
    return{
        type : RECEIVE_RESPONSE_USER,
        payload : data
    }
}
export const receiveErrorUser = (error)=>{
    return{
        type : RECEIVE_ERROR_USER,
        payload : error
    }
}


export const getUser = ()=>{
    return (dispatch)=>{
        dispatch(sendRequestUser())
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            // console.log(res);
            dispatch(receiveResponeUser(res.data))
        }).catch(error =>{
            dispatch(receiveErrorUser(error.massage))
        })
    }
}