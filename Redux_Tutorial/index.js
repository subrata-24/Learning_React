const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
// const thunk = require("redux-thunk")
// const  axios  = require("axios");
const {thunk} = require("redux-thunk");


//Constant
const GET_TODO_REQUEST = "GET_TODO_REQUEST"
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS"
const GET_TODO_FAILED = "GET_TODO_FAILED"
const API_URL = "https://jsonplaceholder.typicode.com/todos"

//State
const initialState = {
    todos: [],
    isLoading: false,
    error: '',
}

//Action
const getRequest = () => {
    return {
        type: GET_TODO_REQUEST,
    }
}

const getRequestSuccess = (todo) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: todo,
    }
}

const getRequestFailed = (error) => {
    return {
        type: GET_TODO_FAILED,
        payload: error,
    }
}

//Reducer
const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading:true,
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                isLoading:false,
            }
        case GET_TODO_FAILED:
            return {
                ...state,
                isLoading: false,
                error:action.payload,
            }
    
        default:
            return state;
    }
}

//Fetch function
const fetchTodo = () => {
    return (dispatch) => {
        dispatch(getRequest());
        axios.get(API_URL)
            .then((res) => {
                const todos = res.data;
                const title = todos.map((res) => res.title)
                console.log(title)
                dispatch(getRequestSuccess(title))
            })
            .catch((error) => {
            dispatch(getRequestFailed(error.message))
        })
    }
}

//Store
const store = createStore(todoReducer, applyMiddleware(thunk))

store.subscribe (() => {
    console.log(store.getState())
})

store.dispatch(fetchTodo())