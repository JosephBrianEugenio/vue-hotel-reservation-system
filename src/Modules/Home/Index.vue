<script setup>
import { ref, onMounted } from "vue";
import HotelsAndRoomList from "./Components/RoomsAndHotelsList.vue";

import { storeToRefs } from "pinia";

import { useHotelStore } from "../Home/Stores/Hotels";

const hotelStore = useHotelStore();

const { hotelList } = storeToRefs(hotelStore);

onMounted(() => {
  hotelStore.getHotelListToAPI();
  hotelStore.getAllBookFromAPI();
});
</script>

<template>
  <q-page>
    <HotelsAndRoomList :hotelList="hotelList" class="q-ma-md" />
  </q-page>
</template>

<style lang="scss" scoped></style>
