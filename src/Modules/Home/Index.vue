<script setup>
import { ref, onMounted } from "vue";
import BookList from "./Components/BookList.vue";
import HotelsAndRoomList from "./Components/RoomsAndHotelsList.vue";

import { storeToRefs } from "pinia";
import { useHotelStore } from "../Home/Stores/Hotels";

const hotelStore = useHotelStore();
const { hotelList, bookingList } = storeToRefs(hotelStore);

onMounted(() => {
  hotelStore.getHotelListToAPI();
  hotelStore.getAllBookFromAPI();
});

const tab = ref("hotels"); // Default tab
</script>

<template>
  <q-page>
    <q-tabs v-model="tab" class="q-ma-md">
      <q-tab name="hotels" label="Hotels and Rooms" />
      <q-tab name="books" label="Your bookings" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="hotels" style="min-height: 100vh">
        <div class="flex flex-center" v-if="!hotelList.length">
          Hotels not found
        </div>
        <HotelsAndRoomList :hotelList="hotelList" class="q-ma-md" v-else />
      </q-tab-panel>

      <q-tab-panel name="books">
        <BookList :bookingList="bookingList" class="q-ma-md" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style lang="scss" scoped></style>
