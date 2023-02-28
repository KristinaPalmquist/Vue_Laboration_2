<script setup>
import AButton from "./AButton.vue";
import AInput from "./AInput.vue";
</script>

<template>
  <div class="form">
    <form @submit.prevent="submit">
      <a-input
        name="Username"
        :rules="{ required: true, min: 5 }"
        :value="username.value"
        :error="username.error"
        @update="update"
      />
      <a-input
        name="Password"
        :rules="{ required: true, min: 10 }"
        :value="password.value"
        :error="password.error"
        type="password"
        @update="update"
      />
      <div id="flex">
        <a-button id="butt" />
        <span id="display">{{ input }}</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: {
        value: "",
        error: "",
      },
      password: {
        value: "pass",
        error: "",
      },
      input: "",
    };
  },
  computed: {
    valid() {
      return !this.username.error && !this.password.error;
    },
  },
  methods: {
    submit() {
      this.input = this.username.value;
    },
    update({ name, value, error }) {
      this[name].value = value;
      this[name].error = error;
    },
  },
};
</script>

<style scoped>
#flex {
  display: flex;
  justify-content: space-around;
  width: 40vw;
  margin: 0 auto;
  align-items: center;
}
</style>
