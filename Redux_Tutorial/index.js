// ✅ Import createStore from redux
const { createStore } = require("redux")

// ✅ Define Action Types (Constants)
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const INCREMENT_BY_VALUE = "incrementByValue"

// ✅ Initial State
const initialValue = {
    count: 0,
}

// ✅ Action Creators (functions that return action objects)
const increment = () => {
    return {
        type: INCREMENT
    }
}


const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}

const decrement = () => {
    return {
        type: DECREMENT
    }
}

const reset = () => {
    return {
        type: RESET
    }
}

// ✅ Reducer Function (pure function to handle state updates)
const countReducer = (state = initialValue, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state
    }
}

// ✅ Create Redux Store with the reducer
const store = createStore(countReducer)

// ✅ Subscribe to store updates (log every time state changes)
store.subscribe(() => {
    console.log(store.getState())
})

// ✅ Dispatch Actions to update the state
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(reset())
// store.dispatch(decrement())

store.dispatch(incrementByValue(5))
store.dispatch(incrementByValue(10))
store.dispatch(incrementByValue(15))
