import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import AuthReducer from "./Reducers/AuthReducer";
import {composeWithDevTools} from "@redux-devtools/extension";

const initialState = {} ;

const middleware = [thunk] ;

export const store = createStore(AuthReducer, composeWithDevTools(applyMiddleware(...middleware))) ;