<script setup>
import servicesList from "src/Modules/GetStarted/Stores/Services";

const { services } = servicesList();
</script>

<template>
  <div class="column q-pa-xl q-gutter-y-md services">
    <div class="col text-center text-white">
      <div class="text-h2">Services</div>
      <div class="text-subtitle2">Check Our Services!</div>
    </div>
    <div class="col flex flex-center">
      <div class="row q-gutter-md flex justify-center">
        <div
          class="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
          v-for="(items, index) in services"
          :key="index"
        >
          <q-card class="text-center service-card">
            <q-card-section>
              <q-icon color="red" size="xl" :name="items.name" class="icons" />
            </q-card-section>
            <q-card-section>
              <div class="text-h4">{{ items.title }}</div>
              <div class="text-caption text-grey-6">
                {{ items.description }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services {
  background-color: #ff9797;
}

.icons {
  color: #ff9797 !important;
}

.service-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f8f9;
  z-index: 0;
  overflow: hidden;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #cccccc;
    background-color: white;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-out;
  }

  &:hover:before {
    transform: scale(2.15);
  }
}
</style>
