import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (
  state = {  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return { ...payload };
    case CATEGORIES_SUCCESS:
      return { ...payload };
    case USER_LOGIN_FAIL:
    case CATEGORIES_FAIL:
      return { ...state, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
