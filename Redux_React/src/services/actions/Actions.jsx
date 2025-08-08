import React from "react";
import { DECREMENT, INCREMENT, RESET } from "../constant/Constant";

export const handleIncrement = () => {
    return {
        type:INCREMENT,
    }
}

export const handleDecrement = () => {
    return {
        type:DECREMENT,
    }
}

export const handleReset = () => {
    return {
        type:RESET,
    }
}