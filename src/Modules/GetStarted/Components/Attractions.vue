<script setup>
import { ref } from "vue";

import attractionsList from "src/Modules/GetStarted/Stores/Attractions";

const { attractions } = attractionsList();
</script>

<template>
  <div class="row q-ma-xl q-gutter-y-xl">
    <div class="col-12">
      <div class="text-h3">Featured Attractions</div>
    </div>
    <div class="col-12 col-xs-12 col-md-5 col-lg-5 text-center">
      <q-img
        src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="image-attractions"
      />
    </div>
    <div class="col-12 col-xs-12 col-md-6 col-lg-6 flex-center flex">
      <div class="column q-mx-xl q-px-xl">
        <div class="text-h2">Good Sight Seeing Views</div>
        <div class="text-caption">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          ab delectus non molestiae nemo nulla veniam deleniti saepe totam quis
          rerum, quo eum ex ad iste, officiis fuga voluptas molestias.
        </div>
      </div>
    </div>
    <div class="col-12 col-xs-12 col-md-6 col-lg-6 flex-center flex">
      <div class="column q-mx-xl q-px-xl">
        <div class="text-h2">Good Sight Seeing Views</div>
        <div class="text-caption">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          ab delectus non molestiae nemo nulla veniam deleniti saepe totam quis
          rerum, quo eum ex ad iste, officiis fuga voluptas molestias.
        </div>
      </div>
    </div>
    <div class="col-12 col-xs-12 col-md-5 col-lg-5 text-center">
      <q-img
        src="https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg"
        class="image-attractions"
      />
    </div>

    <div class="col-12 col-xs-12 col-md-5 col-lg-5 text-center">
      <q-img
        src="https://images.pexels.com/photos/1962732/pexels-photo-1962732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="image-attractions"
      />
    </div>

    <div class="col-12 col-xs-12 col-md-6 col-lg-6 flex-center flex">
      <div class="column q-mx-xl q-px-xl">
        <div class="text-h2">Good Sight Seeing Views</div>
        <div class="text-caption">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          ab delectus non molestiae nemo nulla veniam deleniti saepe totam quis
          rerum, quo eum ex ad iste, officiis fuga voluptas molestias.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.absolute-bottom {
  background-color: #ff9797;
}
.image-attractions {
  width: 80%;
  border-radius: 5px;
}
</style>
