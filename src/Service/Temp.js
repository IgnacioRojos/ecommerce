import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-production-1df6.up.railway.app",
});

export default api;