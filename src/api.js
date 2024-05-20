// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://<your-function-app-name>.azurewebsites.net/api',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getMessage() {
    return apiClient.get('/HttpTrigger1');
  },
};
