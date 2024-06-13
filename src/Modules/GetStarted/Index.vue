<script setup>
import First from "src/Modules/GetStarted/Components/First.vue";
import Rooms from "src/Modules/GetStarted/Components/Rooms.vue";
import Attractions from "./Components/Attractions.vue";
import About from "./Components/About.vue";
import Feedback from "./Components/Feedback.vue";
</script>

<template>
  <q-page>
    <First />
    <Rooms />
    <Attractions />
    <About />
    <Feedback />
  </q-page>
</template>

<style lang="scss" scoped></style>
