import { API_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.warn('API error:', error);
    return Promise.reject(error);
  },
);
