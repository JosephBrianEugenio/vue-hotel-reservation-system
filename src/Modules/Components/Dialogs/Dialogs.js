import Contact from "./Contact.vue";
import Login from "./AuthenticationDialog.vue";
import { useQuasar } from "quasar";

export function useComposableDialogs() {
  const $q = useQuasar();

  const showContactDialog = () => {
    $q.dialog({
      component: Contact,
    }).onOk((data) => {
      console.log("data", data);
    });
  };
  const showLoginDialog = () => {
    $q.dialog({
      component: Login,
    }).onOk((data) => {
      console.log("data", data);
    });
  };
  return { showContactDialog, showLoginDialog };
}
