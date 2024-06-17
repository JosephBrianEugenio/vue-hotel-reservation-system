<script setup>
import { ref } from "vue";
import { useQuasar, useDialogPluginComponent } from "quasar";

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogCancel } = useDialogPluginComponent();

const $q = useQuasar();

const name = ref("");

const email = ref("");

const thoughts = ref("");

const onSubmitContacts = () => {
  $q.notify({
    color: "positive",
    position: "top-left",
    message: "Your message was sent successfully",
  });
};
</script>

<template>
  <q-dialog
    ref="dialogRef"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h5 text-primary">Contact us!</div>

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
      <q-card-section>
        <div class="column q-gutter-y-md">
          <div class="col">
            <q-input v-model="name" outlined label="Name" />
          </div>
          <div class="col">
            <q-input v-model="email" outlined label="Email" />
          </div>
          <div class="col">
            <q-input
              v-model="thoughts"
              outlined
              label="Thoughts"
              type="textarea"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn
          @click="onSubmitContacts"
          label="submit"
          class="bg-primary text-white full-width"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scoped"></style>
