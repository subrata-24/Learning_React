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

//Define State -> Define Action -> Perform Action by Reducer -> Update value