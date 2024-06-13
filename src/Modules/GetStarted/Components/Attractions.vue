<script setup>
import { ref } from "vue";

import attractionsList from "src/Modules/GetStarted/Stores/Attractions";

const { attractions } = attractionsList();
</script>

<template>
  <div class="column">
    <div class="col text-center">
      <div class="text-h6">Featured Attractions</div>
      <div class="text-subtitle1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>
      <div class="col">
        <div class="row q-gutter-md flex-center">
          <div
            v-for="(item, index) in attractions"
            :key="index"
            :class="index < 2 ? 'col-5' : 'col-3'"
          >
            <q-card flat bordered class="card-container">
              <img :src="item.image" class="card-image" />
              <div
                class="absolute-bottom text-subtitle1 text-center text-white q-ma-sm q-py-sm"
              >
                {{ item.name }}
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.absolute-bottom {
  background-color: #ff9797;
}
</style>
