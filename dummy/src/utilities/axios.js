import axios from 'axios';

const http = axios.create();

http.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
		const originalRequest = error.config;
    if ((error.response.data.msg === 'jwt expired' || error.response.data.msg === "You have to login first") && !originalRequest._retry) {
      originalRequest._retry = true;
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

export default http;
