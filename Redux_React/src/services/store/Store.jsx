import {createStore, applyMiddleware} from 'redux'
import UseReducer from '../reducer/UseReducer'
import { thunk } from 'redux-thunk'


const store = createStore(UseReducer, applyMiddleware(thunk))
export default store;