import { defineStore } from "pinia";
import { HTTP_API } from "src/boot/https";
import { ref, computed } from "vue";

export const useHotelStore = defineStore("hotelStore", () => {
  const hotelList = ref();

  const getHotelListToAPI = async () => {
    try {
      const { data } = await HTTP_API().get("hotels/list/");
      console.log("data", data);
    } catch (err) {
      console.error(err);
    }
  };
  const createBookingToAPI = async (payload) => {
    try {
      const { data } = await HTTP_API().post("booking/add/", payload);
      console.log("data booking", data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  return {
    getHotelListToAPI,
    createBookingToAPI,
    hotelList,
  };
});
