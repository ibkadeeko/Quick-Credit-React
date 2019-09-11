import { combineReducers } from 'redux';
import auth from './authReducer';
import userLoan from './userLoanReducer';

const rootReducer = combineReducers({
  auth,
  userLoan
});

export default rootReducer;
