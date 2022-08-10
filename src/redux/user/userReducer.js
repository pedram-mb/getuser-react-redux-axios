import { RECEIVE_ERROR_USER, RECEIVE_RESPONSE_USER, SEND_REQUEST_USER } from "./userType";

const userInit = {
    loading : false,
    data : [],
    error : ''
}

const userReducer = (state = userInit , action)=>{
    switch (action.type) {
        case SEND_REQUEST_USER:
            return {...state , loading : true}
        case RECEIVE_RESPONSE_USER:
            return {...state , loading : false , data : action.payload , error : ""}
        case RECEIVE_ERROR_USER:
            return {...state , loading : false , data : [] , error : action.payload}
        default:
            return state
    }
}
export default userReducer;