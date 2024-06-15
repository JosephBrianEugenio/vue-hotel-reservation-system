<script setup>
import { useComposableDialogs } from "src/Modules/Components/Dialogs/Dialogs.js";

const { showRoomListDialog } = useComposableDialogs();
</script>

<template>
  <div class="column">
    <div class="co">
      <div class="text-h4">Welcome!</div>
    </div>
    <div class="col">
      <q-card class="my-card" flat bordered>
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Hotel name</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              Bertese, Quezon, Nueva Ecija
            </div>
          </div>

          <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$・Italian, Cafe</div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn @click="showRoomListDialog" flat color="primary">
            Show Rooms
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
