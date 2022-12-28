import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} from "../Types/AuthTypes";

const userProfile = JSON.parse(localStorage.getItem('userProfile'));

const initialState = userProfile ? { isLoggedIn: true } : { isLoggedIn: false };

export default function (state = initialState, action) {

    switch (action.type) {

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}
