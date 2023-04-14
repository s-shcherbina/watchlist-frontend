import axios from 'axios';

// const token = sessionStorage.getItem('token');

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: `http://localhost:3002`,
  timeout: 1000,
  headers: {},
});

export const coinGeckoApi = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: `https://api.coingecko.com/api/v3`,
  timeout: 1000,
  headers: {},
});
