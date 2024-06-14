<script setup>
import { ref, computed } from "vue";
import feedbackist from "../Stores/Feedbacks";
import { useQuasar } from "quasar";

const $q = useQuasar();

const slide = ref(1);
const autoplay = ref(true);

const carouselHeight = computed(() => {
  return $q.screen.lt.md ? "600px" : "300px";
});

const { feedbacks } = feedbackist();
</script>

<template>
  <div class="q-pa-xl feedback text-white q-mb-sm">
    <div class="text-h2 text-center q-py-md">Happy Feedback Users</div>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      :style="{ height: carouselHeight }"
      infinite
      class="carousel bg-transparent"
    >
      <q-carousel-slide
        class="column no-wrap flex-center"
        v-for="(items, index) in feedbacks"
        :key="index"
        :name="index"
      >
        <div class="row text-center text-black flex flex-center">
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-white"
          >
            <div class="text-body2 text-justify">
              {{ items.description }}
            </div>
            <div class="text-subtitle2 text-left text-bold q-pt-sm">
              {{ items.name }}
            </div>
            <div class="text-left">
              <q-rating
                v-model="items.rating"
                size="2em"
                color="gold"
                icon="star_border"
                icon-selected="star"
              />
            </div>
          </div>
          <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <q-avatar
              size="100px"
              font-size="52px"
              color="pink"
              text-color="white"
              >{{ items.avatar }}</q-avatar
            >
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <!-- <div class="column flex flex-center feedback q-py-md">
    <div class="col text-center text-white">
      <div class="text-h6">Happy User Feedback</div>
      <div class="text-subtitle1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
        deleniti perspiciatis tempore neque atque aspernatur excepturi mollitia
        minus dignissimos eum esse molestias.
      </div>
    </div>
    <div class="col">
      <div class="row q-gutter-x-md flex-center">
        <div class="col-3" v-for="(items, index) in feedbacks" :key="index">
          <q-card class="user-feedback-card flat">
            <q-card-section>
              <div class="text-body2 text-grey-7 q-pb-md">
                "{{ items.description }}"
              </div>
              <q-avatar size="md" color="red" text-color="white">{{
                items.avatar
              }}</q-avatar>
              {{ items.name }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
.feedback {
  background-color: #ff9797;
}
.user-feedback-card {
  border-radius: 3px !important;
}
.avatar {
  color: #ff9797;
}
.carousel {
}
</style>
