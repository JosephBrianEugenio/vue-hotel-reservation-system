import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useHotelStore } from "src/Modules/Home/Stores/Hotels.js";

export const createBookingFieldModels = () => ({
  //   user: "",
  rooms: "",
  booking_name: "",
  phone_num: "",
  no_of_guest: "",
  check_in: "",
  check_out: "",
  description: "",
});

export function useBookingFormFields() {
  const $q = useQuasar();
  const router = useRouter();

  const hotelStore = useHotelStore();

  const numberOfGuestOptions = [
    {
      label: "1-2 person",
      value: "1",
    },
    {
      label: "1-3 person",
      value: "2",
    },
    {
      label: "1-7 person",
      value: "3",
    },
    {
      label: "1-10 person",
      value: "4",
    },
  ];

  const createBookingPayload = ref(createBookingFieldModels());

  const onSubmitBooking = async (hotelUid) => {
    try {
      const payload = createBookingPayload.value;
      const response = await hotelStore.createBookingToAPI(hotelUid, payload);
      console.log("response here", response);
    } catch (err) {
      console.log("err", err);
      console.error(err.response?.data?.message || err.message);
    }
  };

  const onCancelBooking = async (bookId) => {
    try {
      const response = await hotelStore.cancelBookingToAPI(bookId);
      console.log("response", response);
      $q.notify({
        color: "positive",
        position: "top-left",
        message: response.message,
      });
      return router.push({ path: "home" });
    } catch (err) {
      console.error(err);
    } finally {
      return router.push({ path: "home" });
    }
  };

  return {
    createBookingPayload,
    onSubmitBooking,
    numberOfGuestOptions,
    onCancelBooking,
  };
}
