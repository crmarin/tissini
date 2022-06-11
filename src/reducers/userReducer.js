import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
  VENDOR_SUCCESS,
  VENDOR_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (
  state = { customer: {}, categories: {}, catalogo: {}, login: false, vendor: {} },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, customer: payload.customer, categories: payload.categories, login:true };
    case CATEGORIES_SUCCESS:
      return { ...state, catalogo: payload };
    case VENDOR_SUCCESS:
      return { ...state, vendor: payload };
    case USER_LOGIN_FAIL:
    case CATEGORIES_FAIL:
    case VENDOR_FAIL:
      return { ...state, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
