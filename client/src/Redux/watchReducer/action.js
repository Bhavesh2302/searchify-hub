

import { GET_WATCH_ERROR, GET_WATCH_LOADING, GET_WATCH_SUCCESS } from "./actionTypes"
import axios from "axios"


export const getWatch = (params) =>(dispatch) =>{
dispatch({type: GET_WATCH_LOADING})
return axios({
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/watch/get`,
    params:params,
    headers:{
        'Content-Type':'application/json'
    },
})
.then((res)=>{
    
    dispatch({type: GET_WATCH_SUCCESS,payload:{data: res.data.watchData, totalLength:res.data.totalDataLength, totalFilteredCount: res.data.totalFilteredCount}})
}).catch((err)=>{
    dispatch({type:GET_WATCH_ERROR})
})
} 



