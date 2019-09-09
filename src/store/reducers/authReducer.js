import * as types from '../actions/actionTypes';
import initialState from './initialState';

const { AUTH_USER_SUCCESS, AUTH_USER_FAILURE } = types;
const { auth } = initialState;

/** Authentication Reducer
 * Function that manipulates the state of the redux store
 * This should only be used to manipulate the part of the state that pertains to authentication
 *
 * @param {Object | Array} state The current state of the redux store
 * @param {Object} action Object that contains type and payload
 *
 * @return {Object | Array} Whatever is returned becomes the new state of the redux store
 */
export default function (state = auth, { type, payload }) {
  switch (type) {
    case AUTH_USER_SUCCESS:
      return {
        user: payload.user, isLoggedIn: true, isAdmin: payload.isAdmin, error: null
      };
    case AUTH_USER_FAILURE:
      return { ...state, error: payload.error };
    default:
      return state;
  }
}
