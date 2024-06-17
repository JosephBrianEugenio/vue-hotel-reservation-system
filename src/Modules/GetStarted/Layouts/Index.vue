<script setup>
import { useComposableDialogs } from "src/Modules/Components/Dialogs/Dialogs.js";
import { useAuthStore } from "src/Modules/Authentication/Stores/Auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();

const { isAuthenticated } = storeToRefs(authStore);

const { showContactDialog, showLoginDialog } = useComposableDialogs();
// defineOptions({});
</script>

<template>
  <q-layout>
    <q-header reveal elevated class="transparent-header">
      <q-toolbar>
        <q-toolbar-title class="text-primary">Joseph Hotello</q-toolbar-title>
        <div v-if="!isAuthenticated" class="row q-gutter-x-sm">
          <q-btn
            class="q-px-lg q-py-sm"
            color="primary"
            outline
            label="Contact"
            @click="showContactDialog"
          />
          <q-btn
            class="q-px-lg q-py-sm"
            color="primary"
            outline
            label="Book now"
            @click="showLoginDialog"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="background-image">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.transparent-header {
  background-color: white !important;
  color: black;
  box-shadow: none; /* Remove any shadow */
}

.toolbar {
  background-color: transparent !important;
}
</style>
