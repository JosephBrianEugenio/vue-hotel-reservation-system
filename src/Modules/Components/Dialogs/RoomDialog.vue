<script setup>
import { ref, onMounted } from "vue";
import { useDialogPluginComponent } from "quasar";
import { useHotelStore } from "src/Modules/Home/Stores/Hotels";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

const { dialogRef } = useDialogPluginComponent();

import { useComposableDialogs } from "src/Modules/Components/Dialogs/Dialogs.js";

const { showCreateBook } = useComposableDialogs();

// Emits to handle dialog events
defineEmits(["hide"]);

// Function to emit hide event and close dialog
const handleClose = () => {
  emit("hide");
};

const onHandleNoRoomRoute = () => {
  router.push({ name: "home.view" });
};

const props = defineProps({
  uid: String,
});

const hotelStore = useHotelStore();
const { roomsList } = storeToRefs(hotelStore);

const fetchRooms = async () => {
  if (props.uid) {
    await hotelStore.getRoomsToAPI(props.uid);
  }
};

onMounted(fetchRooms);
</script>

<template>
  <div>
    <q-dialog
      ref="dialogRef"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="my-card" flat bordered>
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="text-center" v-if="!roomsList.length">
          <div class="text-subtitle">Sorry, no rooms available</div>
          <q-btn
            @click="onHandleNoRoomRoute"
            label="go home"
            outline
            color="primary"
            class="q-ma-md"
          />
        </q-card-section>
        <q-card-section
          v-else
          horizontal
          v-for="(items, index) in roomsList"
          :key="index"
        >
          <q-card-section class="q-pt-xs col-7">
            <div class="text-overline">Room Information</div>
            <div class="text-body1 q-mt-sm q-mb-xs">
              <q-icon
                name="hotel"
                size="xs"
                color="primary"
                class="q-mr-xs"
              />Room number:
              {{ items.room_no }}
            </div>
            <div class="text-body1 q-mt-sm q-mb-xs">
              <q-icon name="bed" size="xs" color="primary" class="q-mr-xs" />
              Room type: {{ items.room_type }}
            </div>
            <div class="text-body1 q-mt-sm q-mb-xs">
              <q-icon name="groups" size="xs" color="primary" class="q-mr-xs" />
              Room max guest: {{ items.max_guest }}
            </div>
            <div class="text-caption text-grey q-mt-md">
              <q-icon
                name="description"
                size="xs"
                color="primary"
                class="q-mr-xs"
              />
              {{ items.description }}
            </div>
            <div>
              <q-btn @click="showCreateBook(items)" flat color="primary">
                Book
              </q-btn>
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-card-section>
          <q-separator />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="scss" scoped>
.my-card {
  width: 4000px;
}
</style>
