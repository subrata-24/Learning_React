// ✅ Import createStore from redux
const { createStore, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

// ✅ Define Action Types (Constants)
//product
const ADD_PRODUCT = "addProduct"
const GET_PRODUCT = "getProduct"

// ✅ Initial State
//product
const initialProduct = {
    products: ["table", "khata"],
    productNumber: 2
}


// ✅ Action Creators (functions that return action objects)
//product
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
const getProduct = () => {
    return {
        type:GET_PRODUCT
    }
}


// ✅ Reducer Function (pure function to handle state updates)
//product
const handleProduct = (state = initialProduct, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                product : [...state.products, action.payload],
                productNumber: state.productNumber + 1
            }
        case GET_PRODUCT:
            return {
                ...state,
            }
        default:
            return state
    }
}


// ✅ Create Redux Store with the reducer
const store = createStore(handleProduct, applyMiddleware(logger))


// ✅ Subscribe to store updates (log every time state changes)
store.subscribe(() => {
    console.log(store.getState())
})

// ✅ Dispatch Actions to update the state
//product
store.dispatch(getProduct())
store.dispatch(addProduct("Pen"))


