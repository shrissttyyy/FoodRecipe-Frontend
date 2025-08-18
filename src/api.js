// src/api.js
import axios from 'axios'
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // set per environment
  timeout: 10000,
})
