import UserActionTypes from './user.types.js';

const userReducer = (state = { currentUser: 'guest' }, action) => {
  switch (action) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default: return state;
  }
};

export default userReducer;
