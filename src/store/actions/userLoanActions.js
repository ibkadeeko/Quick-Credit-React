import * as types from './actionTypes';
import * as api from '../requests/userLoanRequests';

export const loadUserLoanDetailsSuccess = () => ({
  type: types.LOAD_USER_LOAN_DETAILS_SUCCESS, payload: {}
});

export const loadUserLoanDetailsFailure = (error) => ({
  type: types.LOAD_USER_LOAN_DETAILS_FAILURE, payload: { error }
});

export const loanApplicationSuccess = () => ({
  type: types.LOAN_APPLICATION_SUCCESS, payload: {}
});

export const loanApplicationFailure = (error) => ({
  type: types.LOAN_APPLICATION_FAILURE, payload: { error }
});

export function loanApplicationRequest(formData) {
  return async (dispatch) => {
    try {
      const response = await api.loanApplicationRequest(formData);
      return dispatch(loanApplicationSuccess(response));
    } catch (error) {
      dispatch(loanApplicationFailure(error));
      throw error;
    }
  };
}
