import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV == "production" ? "/api" : "http://localhost:3001/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
