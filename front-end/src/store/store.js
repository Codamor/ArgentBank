import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "@redux-devtools/extension";
import {initialState} from "./initialState";
import authReducer from "./Reducers/AuthReducer";
import {userReducer} from "./Reducers/UserReducer";

const middleware = [thunk] ;

const rootReducer = combineReducers(
    {
        auth: authReducer,
        userProfile: userReducer
    }
)


export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) ;

store.subscribe(()=> {console.log(store.getState())})