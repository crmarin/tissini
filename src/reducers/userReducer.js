import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
  VENDOR_SUCCESS,
  VENDOR_FAIL,
  ADD_CART,
  REMOVE_CART,
  CART_FAIL
} from '../constants/userConstants';

export const userLoginReducer = (
  state = { customer: {}, categories: {}, catalogo: {}, login: false, vendor: {}, cart: {} },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, customer: payload.customer, categories: payload.categories, cart: payload.cart, login:true };
    case CATEGORIES_SUCCESS:
      return { ...state, catalogo: payload };
    case VENDOR_SUCCESS:
      return { ...state, vendor: payload };
    case ADD_CART:
      return { ...state, cart: payload };
    case REMOVE_CART:
      return { ...state, cart: {} };
    case USER_LOGIN_FAIL:
    case CATEGORIES_FAIL:
    case VENDOR_FAIL:
    case CART_FAIL:
      return { ...state, error: payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
