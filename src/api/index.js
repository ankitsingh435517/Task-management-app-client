import axios from "axios";

const createAPI = () => {
  const API_BASE_URL = "http://localhost:5000";
  const apiHeaders = {
    "Content-Type": "application/json",
  };

  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: apiHeaders
  });

  return api;
};

export default createAPI();
