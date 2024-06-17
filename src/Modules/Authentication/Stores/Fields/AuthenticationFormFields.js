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
      // await router.push({ name: "getting.started" });
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
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

      // Show error notification
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
