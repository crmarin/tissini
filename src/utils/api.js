import axios from 'axios';

const api = axios.create({
  baseURL: 'https://v3.tissini.app/api/v3',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
});

export default api;
