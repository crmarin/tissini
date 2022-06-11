import api from '../utils/api';

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL
} from '../constants/userConstants';

// POST - Login User
export const getcategories = (id) => async (dispatch) => {
  try {
    const { data } = await api.get(`/categories/${id}`);

    // dispatch({
    //   type: CATEGORIES_SUCCESS,
    //   payload: data
    // });

  } catch (err) {
    dispatch({
      type: CATEGORIES_FAIL,
      payload: err.response.data
    });
  }
};

// POST - Login User
export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await api.post('/login/client', formData);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem("mobilephone", formData.mobilephone);

  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err.response.data
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem('mobilephone');
  document.location.href = '/';
};