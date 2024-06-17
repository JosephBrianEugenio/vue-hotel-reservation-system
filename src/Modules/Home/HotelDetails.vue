<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useHotelStore } from "./Stores/Hotels";
import { storeToRefs } from "pinia";
import { useComposableDialogs } from "src/Modules/Components/Dialogs/Dialogs.js";

const route = useRoute();
const hotelStore = useHotelStore();
const { showRoomListDialog } = useComposableDialogs();
const { hotelListDetails } = storeToRefs(hotelStore);

const fetchHotelDetails = async () => {
  const uid = route.params.uid;
  if (uid) {
    await hotelStore.getHotelByIdToAPI(uid);
  }
};

onMounted(() => {
  fetchHotelDetails();
});

watch(
  () => route.params.uid,
  (newUid, oldUid) => {
    if (newUid !== oldUid) {
      fetchHotelDetails();
    }
  }
);
</script>

<template>
  <q-page class="flex flex-center">
    <q-card
      v-if="hotelListDetails && hotelListDetails.location"
      class="my-card"
      flat
      bordered
    >
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-card-section>
        <div class="text-overline text-grey-8">
          <q-icon name="place" />{{ hotelListDetails.location }}
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ hotelListDetails.hotel_name }}
        </div>
        <div class="text-caption text-grey">
          {{ hotelListDetails.description }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn
          @click="showRoomListDialog(hotelListDetails.uid)"
          flat
          color="secondary"
          label="Check Rooms"
        />
      </q-card-actions>
    </q-card>
    <q-spinner v-else size="lg" color="primary" />
  </q-page>
</template>

<style lang="scss" scoped>
.my-card {
  width: 300px;
}
</style>
