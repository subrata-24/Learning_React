const {createStore} = require("redux")

//define type
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

//state
const initialValue = {
    counter: 0
}

const initialUser = {
    user: [
        {id:102, name:"Subrata Biswas"}
    ]
}

//Action -> Object -> {type,payload}
//It's called Action creator (functions that return action objects)
const incrementValue = () => {
    return {
        type: INCREMENT,
    };
};

const decrementValue = () => {
    return {
        type: DECREMENT,
    };
};

const addUser = () => {
    return {
        type: ADD_USER,
        payload: {name:"Subrata Biswas"}
    };
};

const counterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
    
        default:
            return state;
    }
}

//Define State -> Define Action -> Perform Action by Reducer -> Update value

//Store ->getState(), dispatch(), subscribe()

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState());
})

//dispatch action
store.dispatch(incrementValue())
store.dispatch(incrementValue())
store.dispatch(incrementValue())
store.dispatch(decrementValue())
store.dispatch(decrementValue())

