<script setup></script>

<template>
  <div class="row q-pa-xl first text-white">
    <div
      class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex flex-center"
    >
      <div class="column q-gutter-y-md text-center">
        <div class="col">
          <div class="text-h2">Explore the <strong>Joseph Hotello</strong></div>
        </div>
        <div class="col">
          <div class="text-subtitle1 text-center">
            This is the hotels/rooms reservation system
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center"
    >
      <q-img
        src="public/Static/hotel1.jpg"
        alt="first-image"
        class="first-hotel-image"
      />
    </div>
  </div>
  <!-- <div class="first-background flex flex-center">
    <div class="column text-white">
      <div class="text-h4 text-weight-bold col">Are you lost Baby girl?</div>
      <div class="text-subtitle1 col">
        Pinaka magandang hotel goods na goods sa sex
      </div>
      <div class="absolute-bottom text-center">
        <div class="text-subtitle1">
          Charming and cheerful, the Tropical Paradise is a beautiful setting
          for a beachfront vacation. Perched just above the white sands of Four
          Mile Beach, the hotel has unbeatable ocean views.
        </div>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
.first-background {
  /* The image used */
  background-image: url("src/assets/hotel5.jpg");

  min-height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  // filter: blur(3px);
}
.absolute-bottom {
  height: 8%;
  width: 100%;
  display: flex;
  justify-content: center; /* Centers items horizontally */
  align-items: center; /* Centers items vertically */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Blur effect */
}

.first-hotel-image {
  width: 70%;
}
.first {
  background-color: #ff9797;
}
</style>
