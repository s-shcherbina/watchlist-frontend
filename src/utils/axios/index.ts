import axios from 'axios';

// const token = sessionStorage.getItem('token');

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: `http://localhost:3002`,
  timeout: 1000,
  headers: {},
});
