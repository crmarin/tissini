import { combineReducers } from 'redux';
import { userLoginReducer } from './userReducer';

export default combineReducers({
  // user
  userLogin: userLoginReducer,
});
