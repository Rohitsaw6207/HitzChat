import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_BASE_URL
      : "https://hitchat-backend.onrender.com/api",
  withCredentials: true,
});

