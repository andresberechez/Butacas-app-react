import axios from "axios";

//=================
//Nueva configuración de axios
//=================

export const port = 7234;

const instance = axios.create({
  baseURL: `https://localhost:${port}/api/v1/`,
  withCredentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
});

export default instance;
