import http from './index';

const options = {
  headers: { 'Content-Type': 'application/json' }
};

export const register = async (formData) => {
  try {
    const data = JSON.stringify(formData);
    const response = await http.post('/auth/signup', data, options);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const login = async (formData) => {
  try {
    const data = JSON.stringify(formData);
    const response = await http.post('/auth/login', data, options);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
