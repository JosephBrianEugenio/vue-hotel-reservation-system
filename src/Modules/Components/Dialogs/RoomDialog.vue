<script setup>
import { useDialogPluginComponent } from "quasar";

const { dialogRef } = useDialogPluginComponent();

import { useComposableDialogs } from "src/Modules/Components/Dialogs/Dialogs.js";

const { showCreateBook } = useComposableDialogs();

// Emits to handle dialog events
defineEmits(["hide"]);

// Function to emit hide event and close dialog
const handleClose = () => {
  emit("hide");
};
</script>

<template>
  <div>
    <q-dialog
      ref="dialogRef"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">Hotel Name</div>
            <div class="text-h5 q-mt-sm q-mb-xs">Room number 1</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <!-- <q-btn flat round icon="event" /> -->
          <!-- <q-btn flat> 7:30PM </q-btn> -->
          <q-btn @click="showCreateBook" flat color="primary"> Book </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
