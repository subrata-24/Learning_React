// ✅ Import createStore from redux
const { createStore } = require("redux")

// ✅ Define Action Types (Constants)
const ADD_USER = "addUser"

// ✅ Initial State
const initialValue = {
    user: ["Anis"],
    count: 1
}

// ✅ Action Creators (functions that return action objects)

const addUser = (value) => {
    return {
        type: ADD_USER,
        payload: value
    }
}

// ✅ Reducer Function (pure function to handle state updates)
const handleUserAddition = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user : [...state.user, action.payload],
                count: state.count +1
            }
        default:
            return state
    }
}

// ✅ Create Redux Store with the reducer
const store = createStore(handleUserAddition)

// ✅ Subscribe to store updates (log every time state changes)
store.subscribe(() => {
    console.log(store.getState())
})

// ✅ Dispatch Actions to update the state
store.dispatch(addUser("Subrata"))
store.dispatch(addUser("Tania"))
