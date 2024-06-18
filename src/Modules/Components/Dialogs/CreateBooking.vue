<script setup>
import { useQuasar, useDialogPluginComponent } from "quasar";
import useValidationRules from "src/Modules/Composables/ValidationRules";
import { useBookingFormFields } from "src/Modules/Home/Stores/BookingFormFields.js";
import { reactive, ref, watch, onMounted } from "vue";

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogCancel } = useDialogPluginComponent();

const { numberOfGuestOptions, createBookingPayload, onSubmitBooking, loading } =
  useBookingFormFields();

const { rules } = useValidationRules();

const validationGuest = reactive({
  guest: [
    (v) => !!v || "This is required",
    (v) =>
      v <= props.items.max_guest ||
      `The number of guests cannot exceed into ${props.items.max_guest} Person`,
    (v) =>
      v === "" || (v > 0 && v % 1 === 0) || "Value must be a positive integer",
  ],
});

const getDefaultYearMonth = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  return `${year}/${month}`;
};

const props = defineProps({
  items: Object,
});

const onHandleSubmit = async () => {
  await onSubmitBooking(props.items.uid);
};
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
        <div>Create a Booking</div>
        <div>Create a ultimate experience with us!</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-form @submit="onHandleSubmit" class="row q-gutter-y-md q-pt-md">
          <div class="col-12">
            <q-input
              v-model="createBookingPayload.booking_name"
              label="Name of the Person"
              outlined
              :rules="rules.names"
            />
          </div>
          <div class="col-12">
            <q-input
              v-model="createBookingPayload.phone_num"
              label="Phone number"
              outlined
              :rules="rules.phoneNumber"
            >
              <template v-slot:hint>
                The phone number format should be: 0999999999
              </template>
            </q-input>
          </div>
          <div class="col-6">
            <q-input
              class="q-mr-sm"
              label="Check in"
              outlined
              v-model="createBookingPayload.check_in"
              mask="date"
              :rules="rules.checkInDate"
            >
              <template v-slot:append>
                <q-icon
                  color="primary"
                  name="calendar_month"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    ref="qDateProxyCheckIn"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      minimal
                      mask="YYYY/MM/DD"
                      :default-year-month="getDefaultYearMonth()"
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
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-6">
            <q-input
              class="q-ml-sm"
              label="Check out"
              outlined
              v-model="createBookingPayload.check_out"
              mask="date"
              :rules="rules.checkOutDate"
            >
              <template v-slot:append>
                <q-icon
                  color="primary"
                  name="calendar_month"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    ref="qDateProxyCheckOut"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      minimal
                      mask="YYYY/MM/DD"
                      :default-year-month="getDefaultYearMonth()"
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
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-12">
            <q-input
              v-model="createBookingPayload.no_of_guest"
              type="number"
              label="Number of guest"
              outlined
              :rules="validationGuest.guest"
            />
          </div>
          <div class="col-12">
            <q-input
              v-model="createBookingPayload.description"
              label="Suggestion"
              type="textarea"
              outlined
              :rules="rules.requiredRules"
            />
          </div>
          <div class="col-12">
            <q-btn
              type="submit"
              color="primary"
              text-color="white"
              class="full-width"
              label="Submit"
              :loading="loading"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped></style>
