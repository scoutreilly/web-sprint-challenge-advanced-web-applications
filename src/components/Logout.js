import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();
  axiosWithAuth()
    .post("http://localhost:5000/api/logout")
    .then((res) => {
      localStorage.removeItem("token");
      push("/login");
    })
    .catch((e) => e);
  return null;
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
