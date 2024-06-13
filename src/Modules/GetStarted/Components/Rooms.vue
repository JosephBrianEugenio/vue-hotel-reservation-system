<script setup>
import { ref } from "vue";
import villaList from "src/Modules/GetStarted/Stores/Villas";

const { villas } = villaList();
const slide = ref(1);
</script>

<template>
  <div class="column q-gutter-sm">
    <div class="col text-h5 text-left q-pa-md">Popular Hotels</div>
    <q-separator inset />
    <div class="col">
      <div class="row q-gutter-x-md">
        <div class="col" v-for="(items, index) in villas" :key="index">
          <q-card flat>
            <img :src="items.image" style="height: 200px" />
            <q-card-section>
              <div class="text-h6">{{ items.title }}</div>
              <div class="text-subtitle1">{{ items.description }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="col text-center q-mb-sm">
      <q-btn
        class="q-px-md q-py-sm"
        label="See all"
        style="background-color: #ff9797; color: white"
      />
    </div>
  </div>
</template>

<style scoped></style>
