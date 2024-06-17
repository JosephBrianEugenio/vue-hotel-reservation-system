<script setup>
import { useRouter } from "vue-router";
import { useBookingFormFields } from "src/Modules/Home/Stores/BookingFormFields.js";
const { onCancelBooking } = useBookingFormFields();
const props = defineProps({
  bookingList: Array,
});

const router = useRouter();
</script>

<template>
  <div class="column q-gutter-y-md">
    <q-card v-if="!props.bookingList.length" flat bordered>
      <q-card-section class="text-center">
        <div class="text-h4">No Bookings Available</div>
      </q-card-section>
    </q-card>
    <div
      class="col"
      v-for="(items, index) in props.bookingList"
      :key="index"
      v-else
    >
      <q-card flat bordered>
        <q-card-section>
          <div class="row q-gutter-y-md">
            <div class="col-6">
              <q-input
                class="q-mr-sm"
                label="Name"
                outlined
                readonly
                v-model="items.booking_name"
              />
            </div>
            <div class="col-6">
              <q-input
                class="q-ml-sm"
                outlined
                label="Phone number"
                readonly
                v-model="items.phone_num"
              />
            </div>
            <div class="col-12">
              <q-input
                label="Number of guest"
                outlined
                readonly
                v-model="items.no_of_guest"
              />
            </div>
            <div class="col-12">
              <q-input
                label="Description"
                outlined
                type="textarea"
                readonly
                v-model="items.description"
              />
            </div>
            <template v-for="(schedule, index) in items.schedule" :key="index">
              <div class="col-6">
                <q-input
                  v-model="schedule.check_in"
                  class="q-mr-sm"
                  outlined
                  readonly
                  label="Check in date"
                />
              </div>
              <div class="col-6">
                <q-input
                  v-model="schedule.check_out"
                  class="q-ml-sm"
                  outlined
                  readonly
                  label="Check out date"
                />
              </div>
            </template>
          </div>
        </q-card-section>
        <q-card-actions class="justify-end q-mx-md">
          <q-btn
            @click="onCancelBooking(items.uid)"
            label="Cancel your booking"
            color="red-6"
            class="q-px-lg"
            icon="delete"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<style lang="scss scoped"></style>
