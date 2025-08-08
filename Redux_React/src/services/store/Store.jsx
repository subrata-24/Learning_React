import {createStore} from "redux"
import handleReducer from "../reducer/UseReducer";


const store = createStore(handleReducer)

export default store