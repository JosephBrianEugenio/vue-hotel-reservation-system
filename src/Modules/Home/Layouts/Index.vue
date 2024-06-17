<script setup>
import { useAuthStore } from "src/Modules/Authentication/Stores/Auth";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const router = useRouter();

const $q = useQuasar();

const authStore = useAuthStore();

const onHandleLogout = async () => {
  authStore.logout();
  $q.notify({
    color: "positive",
    position: "center",
    message: "Logout successfully",
  });

  await router.push({ path: "/" });
};
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-end">
          Welcome to Search your Hotello
        </q-toolbar-title>
        <q-space />
        <q-btn
          @click="onHandleLogout"
          flat
          icon-right="logout"
          label="Logout"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped></style>
