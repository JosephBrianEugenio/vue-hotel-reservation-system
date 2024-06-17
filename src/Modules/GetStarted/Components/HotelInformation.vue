<script setup>
import { useComposableDialogs } from "src/Modules/Components/Dialogs/Dialogs";

const { showLoginDialog } = useComposableDialogs();
</script>

<template>
  <div class="column q-pa-xl q-gutter-y-md">
    <div class="col text-center q-pb-xl">
      <div class="text-h2">Joseph Hotello Information</div>
    </div>
    <div class="col text-justify">
      <div class="text-subtitle1 text-grey6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        velit? Illo provident facere, velit dicta quidem labore voluptates amet
        quod, distinctio magni sunt rem enim omnis saepe ratione earum? Omnis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        velit? Illo provident facere, velit dicta quidem labore voluptates amet
        quod, distinctio magni sunt rem enim omnis saepe ratione earum? Omnis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        velit? Illo provident facere, velit dicta quidem labore voluptates amet
        quod, distinctio magni sunt rem enim omnis saepe ratione earum? Omnis.
      </div>
    </div>
    <div class="col text-center q-pt-md">
      <q-btn
        @click="showLoginDialog"
        class="q-px-lg q-py-sm"
        label="Book now!"
        outline
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hotel-information {
  background-color: #ff9797;
}
</style>
