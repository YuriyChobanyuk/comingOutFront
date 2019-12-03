import { apiURL } from "../configs";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const isAuthenticated = () => {
  return true;
};

export const signUp = async (name, email, password) => {
  const res = await axios.post(`${apiURL}/auth/register`, {
    name,
    email,
    password
  });
  const token = res.headers['Authorization'];
  localStorage.setItem("token", token);
  return jwtDecode(token);
};

export const login = async (email, password) => {
  const res = await axios.post(`${apiURL}/auth/login`, {
    email,
    password
  });
  const token = res.headers["Authorization"];
  localStorage.setItem("token", token);
  return jwtDecode(token);
};
