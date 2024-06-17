import { ref } from "vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "../Auth";
import { useRouter } from "vue-router";

export const registerFieldModels = () => ({
  username: "",
  email: "",
  password: "",
  password2: "",
});

export const loginFieldsModels = () => ({
  email: "",
  password: "",
});

export function useAuthenticationFormFields() {
  const authStore = useAuthStore();

  const loading = ref(false);

  const router = useRouter();

  const $q = useQuasar();

  const registerPayload = ref(registerFieldModels());

  const loginPayload = ref(loginFieldsModels());

  const onSubmitRegister = async () => {
    try {
      loading.value = true;
      const payload = registerPayload.value;
      await authStore.registerAccountToAPI(payload);
      $q.notify({
        color: "positive",
        position: "top-left",
        message: "Successfully Created",
      });
    } catch (error) {
      let errorMessage =
        error.response?.data?.email ||
        (typeof error.response?.data === "object"
          ? Object.values(error.response.data)[0] // Get the first error message if email is not present
          : error.response?.data?.toString()) ||
        "Unknown error occurred";

      $q.notify({
        color: "negative",
        position: "top-left",
        message: errorMessage,
      });
    }
  };

  const onSubmitLogin = async () => {
    try {
      const payload = loginPayload.value;
      const data = await authStore.loginAccountToAPI(payload);
      $q.notify({
        color: "positive",
        position: "top-left",
        message: "Successfully Login",
      });
      await router.push({ path: "home" });
    } catch (err) {
      console.error(err);
      $q.notify({
        color: "negative",
        position: "top-left",
        message: "Invalid Credentials",
      });
    }
  };

  return {
    registerPayload,
    loginPayload,
    onSubmitRegister,
    onSubmitLogin,
  };
}
