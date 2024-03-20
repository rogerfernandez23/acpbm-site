/* eslint-disable no-param-reassign */
import axios from 'axios';

const apiConection = axios.create({
  baseURL: 'https://backendacpbm.vercel.app/'
});

apiConection.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('useracpbm:data');

  const token = userData && JSON.parse(userData).token;

  config.headers.authorization = `Bearer ${token}`;

  return config;
});

export default apiConection;
