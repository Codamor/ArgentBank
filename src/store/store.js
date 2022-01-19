import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "@redux-devtools/extension";
import {initialState} from "./initialState";
import authReducer from "./Reducers/AuthReducer";

const middleware = [thunk] ;

const rootReducer = combineReducers(
    {
        auth: authReducer
    }
)


export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) ;