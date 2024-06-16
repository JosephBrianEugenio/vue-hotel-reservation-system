<script setup>
import { useQuasar, useDialogPluginComponent } from "quasar";
import { useBookingFormFields } from "src/Modules/Home/Stores/BookingFormFields.js";
import { useAuthStore } from "src/Modules/Authentication/Stores/Auth";

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogCancel } = useDialogPluginComponent();

const { numberOfGuestOptions, createBookingPayload, onSubmitBooking } =
  useBookingFormFields();

const authStore = useAuthStore();
</script>

<template>
  <q-dialog
    ref="dialogRef"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-white text-white" style="width: 700px; max-width: 80vw">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section class="text-center text-primary text-h6 q-pb-none">
        {{ authStore.token }}asd
        <div>Create a Booking</div>
        <div>Create a ultimate experience with us!</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmitBooking" class="row q-gutter-y-md q-pt-md">
          <div class="col-12">
            <q-input
              v-model="createBookingPayload.booking_name"
              createBookingPayload=""
              label="Name of the Person"
              outlined
            />
          </div>
          <div class="col-12">
            <q-input
              v-model="createBookingPayload.phone_num"
              label="Phone number"
              outlined
            />
          </div>
          <div class="col-6">
            <q-input
              class="q-mr-sm"
              label="Check in"
              outlined
              v-model="createBookingPayload.check_in"
              mask="date"
            >
              <template v-slot:append>
                <q-icon
                  color="primary"
                  name="calendar_month"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      minimal
                      mask="YYYY/MM/DD"
                      default-year-month="2000/01"
                      v-model="createBookingPayload.check_in"
                      default-view="Years"
                    >
                      <div class="row items-center justify-end q-gutter-sm">
                        <q-btn
                          dense
                          label="Done"
                          no-caps
                          color="primary"
                          flat
                          v-close-popup
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon> </template
            ></q-input>
          </div>
          <div class="col-6">
            <q-input
              class="q-ml-sm"
              label="Check in"
              outlined
              v-model="createBookingPayload.check_out"
              mask="date"
            >
              <template v-slot:append>
                <q-icon
                  color="primary"
                  name="calendar_month"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      minimal
                      mask="YYYY/MM/DD"
                      default-year-month="2000/01"
                      v-model="createBookingPayload.check_out"
                      default-view="Years"
                    >
                      <div class="row items-center justify-end q-gutter-sm">
                        <q-btn
                          dense
                          label="Done"
                          no-caps
                          color="primary"
                          flat
                          v-close-popup
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon> </template
            ></q-input>
          </div>
          <div class="col-12">
            <q-select
              v-model="createBookingPayload.no_of_guest"
              :options="numberOfGuestOptions"
              emit-value
              behavior="dialog"
              type="number"
              label="Number of guest"
              outlined
            />
          </div>
          <div class="col-12">
            <q-input
              v-model="createBookingPayload.description"
              label="Description"
              type="textarea"
              outlined
            />
          </div>
          <div class="col-12">
            <q-btn
              type="submit"
              color="primary"
              text-color="white"
              class="full-width"
              label="Submit"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped></style>
