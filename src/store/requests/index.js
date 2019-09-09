/* eslint-disable no-param-reassign */
/**
 * An axios proxy to attach the base url and authentication token
 */
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.API_ROUTE
});

let currentUser;

if (localStorage.getItem('currentUser') === null) {
  currentUser = {};
} else {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
}


const token = currentUser.token || '';

http.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

http.interceptors.response.use((response) => response?.data);

export default http;
