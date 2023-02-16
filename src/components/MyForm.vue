<script setup>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
</script>

<template>
  <h3>My form / my input / my button</h3>
  <div class="form">
    <form @submit.prevent="submit">
      <my-input
        name="Username"
        :rules="{ required: true, min: 5 }"
        :value="username.value"
        :error="username.error"
        @update="update"
      />
      <my-input
        name="Password"
        :rules="{ required: true, min: 10 }"
        :value="password.value"
        :error="password.error"
        type="password"
        @update="update"
      />
      <my-button background="darkslateblue" color="white" :disabled="!valid" />
    </form>
  </div>
</template>

<script>
export default {
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      username: {
        value: "user",
        error: "",
      },
      password: {
        value: "pass",
        error: "",
      },
    };
  },
  computed: {
    valid() {
      return !this.username.error && !this.password.error;
    },
  },
  methods: {
    submit($event) {
      console.log("Event", $event);
    },
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    },
  },
};
</script>

<style scoped></style>
