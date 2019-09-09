import jwt from 'jwt-decode';
import * as types from './actionTypes';
import * as api from '../requests/authRequests';

export const userAuthSuccess = ({ user, isAdmin }) => ({
  type: types.AUTH_USER_SUCCESS, payload: { user, isAdmin }
});

export const userAuthFailure = (error) => ({
  type: types.AUTH_USER_FAILURE, payload: { error }
});

export function userAuthRequest(formData, type) {
  return async (dispatch) => {
    try {
      let response;
      let decoded;
      if (type === 'register') {
        response = await api.register(formData);
        localStorage.setItem('currentUser', JSON.stringify(response));
        decoded = jwt(response.token);
        response.isAdmin = decoded.isAdmin;
        return dispatch(userAuthSuccess(response));
      }
      if (type === 'login') {
        response = await api.login(formData);
        localStorage.setItem('currentUser', JSON.stringify(response));
        decoded = jwt(response.token);
        response.isAdmin = decoded.isAdmin;
        return dispatch(userAuthSuccess(response));
      }
    } catch (error) {
      dispatch(userAuthFailure(error));
      throw error;
    }
  };
}
