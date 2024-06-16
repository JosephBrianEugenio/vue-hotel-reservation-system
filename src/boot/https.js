import axios from "axios";
import { useAuthStore } from "src/Modules/Authentication/Stores/Auth";

const apiAxiosInstance = axios.create({
  baseURL: "https://reservehotel.pythonanywhere.com/client/",
});

export const HTTP_WEB = () => {
  const defaultHeaders = {
    Accept: "application/json",
  };

  const webAxiosInstance = axios.create({
    baseURL: "",
    headers: { ...defaultHeaders },
  });

  return webAxiosInstance;
};

export const HTTP_API = () => {
  const authStore = useAuthStore();
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${authStore.token}`,
  };

  const webAxiosInstance = axios.create({
    baseURL: "",
    headers: { ...defaultHeaders },
  });

  return webAxiosInstance;
};
