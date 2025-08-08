import { API_URL, GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../constant/Constant"
import axios from 'axios'


export const asyncActionCreator = () => {
  return async (dispatch) => {
    dispatch({ type: GET_TODO_REQUEST });

    try {
      const response = await axios.get(API_URL);
      dispatch({
        type: GET_TODO_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_TODO_FAILED,
        payload: error.message,
      });
    }
  };
};
