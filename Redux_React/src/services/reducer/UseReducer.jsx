import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../constant/Constant";

const initialState = {
    isLoading: false,
    todo: [],
    error: '',
}

const UseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todo: action.payload,
            }
        case GET_TODO_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}

export default UseReducer;