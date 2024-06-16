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

  const router = useRouter();

  const $q = useQuasar();

  const registerPayload = ref(registerFieldModels());

  const loginPayload = ref(loginFieldsModels());

  const onSubmitRegister = async () => {
    try {
      // loading.value = true;
      const payload = registerPayload.value;
      await authStore.registerAccountToAPI(payload);
      // await router.push({ name: "getting.started" });
    } catch (error) {
      console.error(error);
    } finally {
      // loading.value = false;
    }
  };

  const onSubmitLogin = async () => {
    try {
      const payload = loginPayload.value;
      await authStore.loginAccountToAPI(payload);
      // await router.push({ path: "home" });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    registerPayload,
    loginPayload,
    onSubmitRegister,
    onSubmitLogin,
  };
}
