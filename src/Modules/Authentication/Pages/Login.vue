<script setup></script>

<template>
  <q-page>
    <div class="row">
      <div class="col-6">
        <img src="src\assets\hotel1.jpg" alt="hotel1" style="width: 100%" />
      </div>
      <div class="col-6">
        <q-card>
          <q-card-section class="q-gutter-y-md">
            <h3>Login</h3>
            <q-input outlined label="Email" type="email" />
            <q-input outlined label="Password " type="Password " />
          </q-card-section>
          <q-card-actions>
            <q-btn class="full-width" color="primary" blocked label="Login" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped></style>
