import React from "react";
import { DECREMENT, INCREMENT, RESET } from "../constant/Constant";
const initialValue = {count:0}

const handleReducer = (state=initialValue, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
               count: state.count+1
           }
        case DECREMENT:
            return {
                ...state,
               count: state.count - 1
            }
        case RESET:
            return {
                ...state,
               count: 0
           }
        default:
            return state
    }
}

export default handleReducer