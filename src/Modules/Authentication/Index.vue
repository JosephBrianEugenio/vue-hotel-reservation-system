<script setup>
import { ref } from "vue";
import LoginTab from "src/Modules/Authentication/Components/LoginTab.vue";
import RegisterTab from "src/Modules/Authentication/Components/RegisterTab.vue";

const currentTab = ref("login");
</script>

<template>
  <q-page class="flex-center flex">
    <div class="row">
      <div class="col-6">
        <img src="src\assets\hotel1.jpg" alt="hotel1" style="width: 100%" />
      </div>
      <div class="col-6">
        <q-tab-panels v-model="currentTab" animated class="bg-none">
          <q-tab-panel name="login">
            <LoginTab />
          </q-tab-panel>
          <q-tab-panel name="register">
            <RegisterTab />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
