import http from './index';

const options = {
  headers: { 'Content-Type': 'application/json' }
};

export const loanApplicationRequest = async (formData) => {
  try {
    const data = JSON.stringify(formData);
    const response = await http.post('/loans', data, options);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const loadUserLoanDetailsRequest = async () => {
  try {
    // const { data } = await http.get(/loans/);
  } catch (error) {
    throw error.response.data.error;
  }
};
