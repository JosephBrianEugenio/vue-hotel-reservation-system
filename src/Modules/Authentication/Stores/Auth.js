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
      //   registerState.value = data.data.data;
      //   $q.notify({
      //     color: "positive",
      //     position: "bottom",
      //     message: "Success",
      //   });
    } catch (error) {
      console.error("error", error.response.data.errors);
      //   const errorMessage = Object.values(error.response.data.errors)
      //     .map((fieldErrors) => fieldErrors.join(", "))
      //     .join(", ");

      //   $q.notify({
      //     color: "negative",
      //     position: "bottom",
      //     message: errorMessage,
      //   });
    }
  };

  const loginAccountToAPI = async (payload) => {
    try {
      const data = await HTTP_WEB().post("login/", payload);
      console.log("data", data.data.access_token);
      token.value = data.data.access_token;
      registerState.value = data.data.data;
      return data;
    } catch (error) {
      console.error("error", error.data.error);

      throw error;
    }
  };

  const isAuthenticated = computed(() => !!token.value);

  return {
    registerAccountToAPI,
    loginAccountToAPI,
    isAuthenticated,
    token,
  };
});
