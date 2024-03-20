import axios from "axios";

const axiosServices = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      (error.response && error.response.data) || "Wrong Services"
    );
  }
);

export default axiosServices;
