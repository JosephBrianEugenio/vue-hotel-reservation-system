<script setup>
import feedbackist from "../Stores/Feedbacks";

const { feedbacks } = feedbackist();
</script>

<template>
  <div class="column flex flex-center feedback">
    <div class="col text-center">
      <div class="text-h6">Happy User Feedback</div>
      <div class="text-subtitle1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
        deleniti perspiciatis tempore neque atque aspernatur excepturi mollitia
        minus dignissimos eum esse molestias.
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-3" v-for="(items, index) in feedbacks" :key="index">
          <q-card>
            <q-card-section>
              <div class="text-subtitle1">
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
.feedback {
  background-color: #ff9797;
}
</style>
