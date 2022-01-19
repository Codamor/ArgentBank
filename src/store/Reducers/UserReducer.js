import {GET_USER_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILED} from "../Types/UserTypes";

const userProfile = JSON.parse(localStorage.getItem('userProfile'));

const initialState = userProfile ? userProfile : { userProfile: null };

export function userReducer(userProfile = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_USER_PROFILE:
            return payload;

        case UPDATE_PROFILE_SUCCESS: {
            return {
                ...userProfile,
                ...payload,
            };
        }
        case UPDATE_PROFILE_FAILED:
            return userProfile;

        default:
            return userProfile;
    }
}
