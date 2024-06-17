<script setup>
import { ref } from "vue";
import { useAuthenticationFormFields } from "../Stores/Fields/AuthenticationFormFields";
import useValidationRules from "src/Modules/Composables/ValidationRules";

const { registerPayload, onSubmitRegister } = useAuthenticationFormFields();

const { rules } = useValidationRules();

const isPwd = ref(true);

const validationPassword = ref({
  password: [
    (v) => !!v || "Password is required",
    (v) => v.length >= 8 || "Password must be at least 8 characters long",
    (v) =>
      /[A-Z]/.test(v) || "Password must contain at least one capital letter",
  ],
  confirmPassword: [
    (v) => v == registerPayload.value.password || "Passwords must match",
  ],
});
</script>

<template>
  <q-form
    @submit="onSubmitRegister"
    lazy-rules
    class="row text-primary q-px-md"
  >
    <div class="col-12 q-py-md text-center">
      <div class="text-h3">Register</div>
    </div>
    <div class="col-12">
      <q-input
        v-model="registerPayload.username"
        outlined
        label="Username"
        :rules="rules.requiredRules"
      />
    </div>
    <div class="col-12">
      <q-input
        v-model="registerPayload.email"
        outlined
        label="Email"
        :rules="rules.email"
      />
    </div>
    <div class="col-6">
      <q-input
        v-model="registerPayload.password"
        class="q-pr-sm"
        outlined
        label="Password"
        :type="isPwd ? 'password' : 'text'"
        :rules="rules.requiredRules"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div class="col-6">
      <q-input
        v-model="registerPayload.password2"
        class="q-pl-sm"
        outlined
        label="Confirm Password"
        :type="isPwd ? 'password' : 'text'"
        :rules="rules.requiredRules"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          /> </template
      ></q-input>
    </div>
    <div class="col-12 q-pb-md">
      <q-btn type="submit" class="full-width" color="primary" label="Sign up" />
    </div>
  </q-form>
</template>

<style lang="scss" scoped></style>
