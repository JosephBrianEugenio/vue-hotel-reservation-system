<script setup>
import { ref, defineProps } from "vue";
import { useComposableDialogs } from "src/Modules/Components/Dialogs/Dialogs.js";
import { useHotelStore } from "../Stores/Hotels";
import { useRouter } from "vue-router";

const { showRoomListDialog, showCreateBook } = useComposableDialogs();

const props = defineProps(["hotelList"]);

const hotelStore = useHotelStore();

const router = useRouter();

const onHandleRedirect = async (items) => {
  await hotelStore.getHotelByIdToAPI(items.uid);

  let uid = items.uid;

  router.push({ name: "hotel.detail", params: { uid } });
};
</script>

<template>
  <div class="column">
    <div class="col">
      <div class="text-h4">Welcome!</div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-3" v-for="(items, index) in hotelList" :key="index">
          <q-card class="my-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            <q-card-section>
              <q-btn
                fab
                color="primary"
                icon="place"
                class="absolute"
                style="top: 0; right: 12px; transform: translateY(-50%)"
              >
                <q-tooltip
                  transition-show="flip-right"
                  transition-hide="flip-left"
                >
                  {{ items.location }}
                </q-tooltip>
              </q-btn>

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">{{ items.hotel_name }}</div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-caption text-grey">
                {{ items.description }}
              </div>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn @click="onHandleRedirect(items)" flat color="primary">
                Book me!
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
