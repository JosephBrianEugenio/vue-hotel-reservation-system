<script setup>
import { ref } from "vue";
import { useAuthenticationFormFields } from "../Stores/Fields/AuthenticationFormFields";
import useValidationRules from "src/Modules/Composables/ValidationRules";

const { rules } = useValidationRules();

const { loginPayload, onSubmitLogin } = useAuthenticationFormFields();

const isPwd = ref(true);
</script>

<template>
  <q-form
    @submit="onSubmitLogin"
    lazy-rules
    class="column text-primary q-px-md"
  >
    <div class="col text-center q-py-md">
      <div class="text-h3">Login</div>
    </div>
    <div class="col">
      <q-input
        v-model="loginPayload.email"
        outlined
        label="Email"
        :rules="rules.requiredRules"
      />
    </div>
    <div class="col">
      <q-input
        v-model="loginPayload.password"
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
    <div class="col">
      <q-btn type="submit" class="full-width" color="primary" label="Login" />
    </div>
  </q-form>
</template>

<style lang="scss" scoped></style>
