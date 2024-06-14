<script setup>
import { ref } from "vue";
import { useDialogPluginComponent } from "quasar";
import LoginTab from "src/Modules/Authentication/Components/LoginTab.vue";
import RegisterTab from "src/Modules/Authentication/Components/RegisterTab.vue";

const { dialogRef } = useDialogPluginComponent();

// Reactive variables to manage current active tab
const activeTab = ref("login");

// Functions to switch between tabs
const switchToLogin = () => {
  activeTab.value = "login";
};

const switchToSignup = () => {
  activeTab.value = "signup";
};

// Emits to handle dialog events
defineEmits(["hide"]);

// Function to emit hide event and close dialog
const handleClose = () => {
  emit("hide");
};
</script>

<template>
  <q-dialog
    ref="dialogRef"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="text-white" style="width: 700px; max-width: 80vw">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn
          class="text-primary"
          icon="close"
          flat
          round
          dense
          v-close-popup
        />
      </q-card-section>

      <q-card-section class="text-primary q-pt-none">
        <q-tabs v-model="activeTab">
          <q-tab name="login" @click="switchToLogin">Login</q-tab>
          <q-tab name="signup" @click="switchToSignup">Signup</q-tab>
        </q-tabs>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <!-- Login form -->
        <div v-if="activeTab === 'login'">
          <LoginTab />
          <!-- <div class="text-h6"></div> -->
          <!-- Your login form content here -->
        </div>

        <!-- Signup form -->
        <div v-if="activeTab === 'signup'">
          <RegisterTab />
          <!-- Your signup form content here -->
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
/* Add your scoped styles here */
</style>
