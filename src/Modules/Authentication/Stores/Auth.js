import { defineStore } from "pinia";
import { useQuasar } from "quasar";
import { HTTP_WEB } from "src/boot/https.js";
import { ref, computed } from "vue";
import { useLocalStorage } from "@vueuse/core";

export const registrationInitialState = () => [
  {
    username: "",
    email: "",
    password: "",
    password2: "",
  },
];

export const useAuthStore = defineStore("authStore", () => {
  const $q = useQuasar();
  const registerState = ref(registrationInitialState());

  const token = useLocalStorage("access_token");

  const registerAccountToAPI = async (payload) => {
    try {
      const data = await HTTP_WEB().post("register/", payload);
      console.log("data", data);
      return data;
    } catch (error) {
      console.error("error", error.response.data);
      throw error;
    }
  };

  const loginAccountToAPI = async (payload) => {
    try {
      const data = await HTTP_WEB().post("login/", payload);
      console.log("data", data.data.access_token);
      token.value = data.data.access_token;
      return data;
    } catch (error) {
      console.error("error", error.data.error);
      throw error;
    }
  };

  const resetCredentials = () => {
    token.value = null;
    // localStorage.removeItem("access_token");
  };

  const logout = async () => {
    resetCredentials();
  };

  const isAuthenticated = computed(() => !!token.value);

  return {
    registerAccountToAPI,
    loginAccountToAPI,
    isAuthenticated,
    token,
    resetCredentials,
    logout,
  };
});
