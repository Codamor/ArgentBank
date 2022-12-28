import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} from "../Types/AuthTypes";

import AuthService from "../../Services/AuthService";

export const login = (email, password) => (dispatch) => {
    return (
        AuthService
            .login(
                {email: email, password: password }).then(
                () => {
                    dispatch({
                        type: LOGIN_SUCCESS,
                    });

                    return Promise.resolve();
                },
                () => {
                    dispatch({
                        type: LOGIN_FAILED,
                    });

                    return Promise.reject();
                },
        )
    )
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
