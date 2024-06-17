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
      await hotelStore.createBookingToAPI(hotelUid, payload);

      // Show success notification only if the API call is successful
      $q.notify({
        color: "positive",
        position: "top-left",
        message: "Successfully Booked",
      });

      // Navigate or perform other actions upon successful booking
      // await router.push();
    } catch (err) {
      console.error(err.response?.data?.message || err.message);

      // Show error notification if the API call fails
      $q.notify({
        color: "negative",
        position: "top-left",
        message: err.response?.data?.message || "Booking failed",
      });
    }
  };

  return { createBookingPayload, onSubmitBooking, numberOfGuestOptions };
}
