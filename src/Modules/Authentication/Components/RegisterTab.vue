<script setup>
import { ref } from "vue";
import { useAuthenticationFormFields } from "../Stores/Fields/AuthenticationFormFields";

const { registerPayload, onSubmitRegister } = useAuthenticationFormFields();
</script>

<template>
  <q-form
    @submit="onSubmitRegister"
    class="row q-gutter-y-md text-primary q-px-md"
  >
    <div class="col-12 text-center">
      <div class="text-h3">Register</div>
    </div>
    <div class="col-12">
      <q-input v-model="registerPayload.username" outlined label="Username" />
    </div>
    <div class="col-12">
      <q-input v-model="registerPayload.email" outlined label="Email" />
    </div>
    <div class="col-6">
      <q-input
        v-model="registerPayload.password"
        class="q-pr-sm"
        outlined
        label="Password"
      />
    </div>
    <div class="col-6">
      <q-input
        v-model="registerPayload.password2"
        class="q-pl-sm"
        outlined
        label="Confirm Password"
      />
    </div>
    <div class="col-12 q-pb-md">
      <q-btn type="submit" class="full-width" color="primary" label="Sign up" />
    </div>
  </q-form>
</template>

<style lang="scss" scoped></style>
