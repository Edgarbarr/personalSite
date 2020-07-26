import UserActionTypes from "./user.types.js";

export const userActions = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})