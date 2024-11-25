import axios from "axios";
const baseURL = "https://xexit-backend.onrender.com:8082";

export const axiosInstance = axios.create({
  baseURL,
});

export const authenticatedInstance = axios.create({
  baseURL,
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});
