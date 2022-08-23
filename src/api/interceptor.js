import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    Authorization: `Bearer ${config.api.token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const requestHandler = (request) => {
  return request;
};

const errorHandler = async (error) => {
  if (error.response.status >= 400) {
    await Promise.reject(error.response);
  }
};

const successHandler = (response) => {
  return response;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
