import * as types from '../actions/actionTypes';
import initialState from './initialState';

const {
  LOAD_USER_LOAN_DETAILS_SUCCESS,
  LOAD_USER_LOAN_DETAILS_FAILURE,
  LOAN_APPLICATION_SUCCESS,
  LOAN_APPLICATION_FAILURE
} = types;
const { userLoan } = initialState;

/** User Loan Reducer
 * Function that manipulates the state of the redux store
 * This should only be used to manipulate the part of the state that pertains to user loans
 *
 * @param {Object | Array} state The current state of the redux store
 * @param {Object} action Object that contains type and payload
 *
 * @return {Object | Array} Whatever is returned becomes the new state of the redux store
 */
export default function (state = userLoan, { type, payload }) {
  switch (type) {
    case LOAN_APPLICATION_SUCCESS:
      return { ...state };
    case LOAN_APPLICATION_FAILURE:
      return { ...state, error: payload.error };
    case LOAD_USER_LOAN_DETAILS_SUCCESS:
      return {};
    case LOAD_USER_LOAN_DETAILS_FAILURE:
      return { ...state, error: payload.error };
    default:
      return state;
  }
}
