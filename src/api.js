import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://smm-back.onrender.com',
});

export const setAuthHeader = token => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    api.defaults.headers.common.Authorization = '';
  }
};
