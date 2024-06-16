<script setup>
import { ref, onMounted } from "vue";
import HotelsAndRoomList from "./Components/RoomsAndHotelsList.vue";

import { storeToRefs } from "pinia";

import { useHotelStore } from "../Home/Stores/Hotels";

const hotelStore = useHotelStore();

onMounted(() => {
  hotelStore.getHotelListToAPI();
});
</script>

<template>
  <q-page> <HotelsAndRoomList class="q-ma-md" /> </q-page>
</template>

<style lang="scss" scoped></style>
