<script setup>
import { ref, onMounted } from "vue";
import BookList from "./Components/BookList.vue";
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
    <div class="flex flex-center" v-if="!hotelList.length">
      Hotels not found
    </div>
    <HotelsAndRoomList :hotelList="hotelList" class="q-ma-md" v-else />
  </q-page>
</template>

<style lang="scss" scoped></style>
