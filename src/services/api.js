import axios from 'axios';

const apiConection = axios.create({
  baseURL: 'http://localhost:8080'
});

export default apiConection;
