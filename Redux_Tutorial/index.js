// ✅ Import createStore from redux
const { createStore, combineReducers } = require("redux")

// ✅ Define Action Types (Constants)
//product
const ADD_PRODUCT = "addProduct"
const GET_PRODUCT = "getProduct"

//Cart
const ADD_CART = "addCart"
const GET_CART = "getCart"

// ✅ Initial State
//product
const initialProduct = {
    products: ["table", "khata"],
    productNumber: 2
}

//Cart
const initialCart = {
    carts: ["sugar", "chal", "dal"],
    cartNumber: 3
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

//Cart
const addCart = (cart) => {
    return {
        type: ADD_CART,
        payload: cart
    }
}
const getCart = () => {
    return {
        type:GET_CART
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

//product
const handleCart = (state = initialCart, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                cart : [...state.carts, action.payload],
                cartNumber: state.cartNumber + 1
            }
        case GET_CART:
            return {
                ...state,
            }
        default:
            return state
    }
}

//Combined Reducer(By which we can combined multiple reducer in a roor reducer)
const rootReducer = combineReducers({
    ProductR: handleProduct,
    CartR: handleCart
})

// ✅ Create Redux Store with the reducer
const store = createStore(rootReducer)


// ✅ Subscribe to store updates (log every time state changes)
store.subscribe(() => {
    console.log(store.getState())
})

// ✅ Dispatch Actions to update the state
//product
store.dispatch(getProduct())
store.dispatch(addProduct("Pen"))

//Cart
store.dispatch(getCart())
store.dispatch(addCart("Pen"))

