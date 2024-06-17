import Contact from "./Contact.vue";
import Login from "./AuthenticationDialog.vue";
import RoomDialog from "./RoomDialog.vue";
import CreateBooking from "./CreateBooking.vue";
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
  const showRoomListDialog = (uid) => {
    $q.dialog({
      component: RoomDialog,
      componentProps: { uid },
    }).onOk((data) => {
      console.log("data", data);
    });
  };
  const showCreateBook = (items) => {
    $q.dialog({
      component: CreateBooking,
      componentProps: { items },
    }).onOk((data) => {
      console.log("data", data);
    });
  };
  return {
    showContactDialog,
    showLoginDialog,
    showRoomListDialog,
    showCreateBook,
  };
}
