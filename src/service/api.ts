/** @format */

import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: baseUrl,
});



export const authJsonHeader = () => ({
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
});

export default api;
