<script setup>
import { ref } from "vue";
import { useAuthenticationFormFields } from "../Stores/Fields/AuthenticationFormFields";

const { loginPayload, onSubmitLogin } = useAuthenticationFormFields();
</script>

<template>
  <q-form
    @submit="onSubmitLogin"
    class="column q-gutter-y-md text-primary q-px-md"
  >
    <div class="col text-center">
      <div class="text-h3">Login</div>
    </div>
    <div class="col">
      <q-input v-model="loginPayload.email" outlined label="Email" />
    </div>
    <div class="col">
      <q-input v-model="loginPayload.password" outlined label="Password" />
    </div>
    <div class="col">
      <q-btn type="submit" class="full-width" color="primary" label="Login" />
    </div>
  </q-form>
</template>

<style lang="scss" scoped></style>
