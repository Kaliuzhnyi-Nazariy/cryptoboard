import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV == "production"
      ? "https://cryptoboard-unor.onrender.com/api"
      : "http://localhost:3001/api",
  withCredentials: true,
  // headers: { "Content-Type": "application/json" },
});

export const setHeader = (token: string) => {
  // console.log({ token });
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // console.log("api headers: ", api.defaults.headers);
};

export const cleanHeader = () => {
  api.defaults.headers.Authorization = "";
};
