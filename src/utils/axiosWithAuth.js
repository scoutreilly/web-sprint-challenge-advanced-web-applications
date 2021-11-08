import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth
