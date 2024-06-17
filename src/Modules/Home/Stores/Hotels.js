import { defineStore } from "pinia";
import { HTTP_API } from "src/boot/https";
import { useQuasar } from "quasar";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export const useHotelStore = defineStore("hotelStore", () => {
  const $q = useQuasar();

  const router = useRouter();

  const hotelList = ref([]);
  const hotelListDetails = ref({});
  const roomsList = ref([]);
  const bookingList = ref({});

  const getHotelListToAPI = async () => {
    try {
      const { data } = await HTTP_API().get("hotels/list/");
      console.log("data", data.data);
      hotelList.value = data.data;
    } catch (err) {
      console.error(err);
    }
  };
  const getHotelByIdToAPI = async (uid) => {
    try {
      const { data } = await HTTP_API().get(`hotels/details/?uid=${uid}`);
      hotelListDetails.value = data.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const getRoomsToAPI = async (uid) => {
    try {
      const { data } = await HTTP_API().get(`rooms/list/?uid=${uid}`);
      console.log("data", data.data);
      roomsList.value = data.data;
    } catch (err) {
      console.error(err);
    }
  };
  const createBookingToAPI = async (hotelUid, payload) => {
    try {
      const { data } = await HTTP_API().post(
        `booking/add/?rooms=${hotelUid}`,
        payload
      );
      $q.notify({
        color: "positive",
        position: "top-left",
        message: data.message,
      });
      router.push("home.view");

      return data;
    } catch (err) {
      console.error("andito ka ba ?", err.response.data.message);
      $q.notify({
        color: "negative",
        position: "top-left",
        message: err.response.data?.message || "Booking failed",
      });
    }
  };

  const cancelBookingToAPI = async (bookingId) => {
    try {
      const { data } = await HTTP_API().put(
        `booking/cancel/?booking_id=${bookingId}`
      );
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const getAllBookFromAPI = async () => {
    try {
      const { data } = await HTTP_API().get("booking/list/");
      console.log("datass", data.data);
      bookingList.value = data.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  return {
    getHotelListToAPI,
    getHotelByIdToAPI,
    getRoomsToAPI,
    createBookingToAPI,
    getAllBookFromAPI,
    cancelBookingToAPI,
    hotelList,
    hotelListDetails,
    bookingList,
    roomsList,
  };
});
