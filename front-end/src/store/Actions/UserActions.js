import {GET_USER_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILED} from "../Types/UserTypes";

import UserService from "../../Services/UserService";

export const fetchProfile = () => async (dispatch) => {
    try {
        const res = await UserService.fetchProfile();
        dispatch({
            type: GET_USER_PROFILE,
            payload: res.body,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateProfile = (firstName, lastName) => async (dispatch) => {
    return UserService.updateProfile({ firstName: firstName, lastName: lastName }).then(
        (res) => {
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: res.body,
            });

            return Promise.resolve();
        },
        () => {
            dispatch({
                type: UPDATE_PROFILE_FAILED,
            });

            return Promise.reject();
        },
    );
};
