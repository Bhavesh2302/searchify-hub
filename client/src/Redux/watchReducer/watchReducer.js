import { GET_WATCH_ERROR, GET_WATCH_LOADING, GET_WATCH_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    data: [],
    totalLength:null,
    totalFilteredCount:null
  };
  
export const watchReducer = (state = initState,{type,payload})=>{
  console.log(payload,"payload")
    switch (type) {
        case GET_WATCH_LOADING: {
            return {
              ...state,
              isError: false,
              isLoading: true,
            };
          }
          case GET_WATCH_SUCCESS: {
            return {
              ...state,
              isError: false,
              isLoading: false,
              data:[...payload.data],
              totalLength: payload.totalLength,
              totalFilteredCount: payload.totalFilteredCount
            };
          }
        case GET_WATCH_ERROR: {
          return {
            ...state,
            isError: true,
            isLoading: false,
          };
        }
        default:
          return state;
      }

}