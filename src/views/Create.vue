<template>
  <div>
    <h2>Create การกระทำ</h2>
    <hr />
    <br /><br />
    <div class="m-auto col-lg-7 col-md-7 col-sm-12">
      <form @submit.prevent="validateData()">
        <div class="row mb-3 g-2">
          <div class="col">
            <label for="firstname" class="form-label">Firstname</label>
            <input
              type="text"
              v-model="data.firstname"
              class="form-control"
              :class="{ 'is-invalid': v$.data.firstname.$error }"
              placeholder="Firstname"
              name="firstname"
              aria-describedby="firstname"
            />
            <div class="invalid-feedback">
              <span v-if="v$.data.firstname.$error">
                Firstname is invalid
              </span>
            </div>
          </div>
          <div class="col">
            <label for="firstname" class="form-label">Lastname</label>
            <input
              type="text"
              v-model="data.lastname"
              class="form-control"
              :class="{ 'is-invalid': v$.data.lastname.$error }"
              placeholder="Lastname"
              name="lastname"
              aria-describedby="lastname"
            />
            <div class="invalid-feedback">
              <span v-if="v$.data.lastname.$error"> Lastname is invalid </span>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            v-model="data.email"
            class="form-control"
            :class="{ 'is-invalid': v$.data.email.$error }"
            placeholder="Email"
            name="email"
            aria-describedby="email"
          />
          <div class="invalid-feedback">
            <span v-if="v$.data.email.$error"> Email is invalid </span>
          </div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            v-model="data.password"
            class="form-control"
            :class="{ 'is-invalid': v$.data.password.$error }"
            placeholder="Password"
            name="password"
          />
          <div class="invalid-feedback">
            <span v-if="v$.data.password.$error"> Password is invalid </span>
          </div>
        </div>
        <div class="mb-3 text-center">
          <button class="btn btn-primary" type="submit">submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "Create",
  data() {
    return {
      v$: useVuelidate(),
      data: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      data: {
        firstname: {
          required,
        },
        lastname: {
          required,
        },
        email: {
          required,
          email,
        },
        password: {
          required,
        },
      },
    };
  },
  methods: {
    submitData() {
      console.log("Success");
    },
    validateData() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.submitData();
      }
    },
  },
};
</script>
<style scoped></style>
