import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "../../baseUrl";


const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers = config.headers ?? {};

      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.error("Bad Request");
          break;
        case 401:
          console.error("Unauthorized: Please log in to continue.");
          window.location.replace("/auth");
          break;
        case 500:
          console.error("Internal Server Error");
          break;
        default:
          console.error(`Error: ${status}`);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
