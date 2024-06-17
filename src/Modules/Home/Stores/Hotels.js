import { defineStore } from "pinia";
import { HTTP_API } from "src/boot/https";
import { ref, computed } from "vue";

export const useHotelStore = defineStore("hotelStore", () => {
  const hotelList = ref([]);
  const hotelListDetails = ref({});
  const roomsList = ref([]);
  const bookList = ref([]);

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
      console.log("data booking", data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  const getAllBookFromAPI = async () => {
    try {
      const { data } = await HTTP_API().get("booking/list/");
      console.log("data booking", data);
    } catch (err) {
      console.error(err);
    }
  };
  return {
    getHotelListToAPI,
    getHotelByIdToAPI,
    getRoomsToAPI,
    createBookingToAPI,
    getAllBookFromAPI,
    hotelList,
    hotelListDetails,
    roomsList,
  };
});
