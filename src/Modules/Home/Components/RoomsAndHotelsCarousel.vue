<script setup>
import { ref } from "vue";

const slide = ref(1);
</script>

<template>
  <div class="rooms-and-hotels">
    <div class="column">
      <div class="col">
        <div class="text-h3 text-center">
          Book your fine hotel and rooms in <br /><strong
            >Joseph Hotello</strong
          >
          <div class="text-subtitle1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
      <div class="col q-pa-md">
        <q-carousel swipeable animated v-model="slide" thumbnails infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
