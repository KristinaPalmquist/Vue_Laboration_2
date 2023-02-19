<script setup>
import AButton from "./AButton.vue";
</script>

<template>
  <div>
    <form>
      <label :for="firstName">Please enter your</label>
      <input
        type="text"
        placeholder="firstname"
        class="inputfield"
        v-model="firstName"
      />
      <span>and</span>
      <input
        type="text"
        placeholder="lastname"
        class="inputfield"
        :value="lastName"
        v-on:input="inputLastName"
      />
      <a-button :value="`${text}`" @click.prevent="onClick" />
    </form>
    <div v-if="show">
      <h4>Hi {{ firstName }} {{ lastName }}!</h4>
      <p>Hey you{{ result }}!</p>
    </div>
    <div class="red">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      error: "",
      show: false,
      text: "Click me!",
      result: "",
    };
  },
  methods: {
    inputLastName($event) {
      this.lastName = $event.target.value;
    },
    onClick() {
      if (this.firstName.length < 1 && this.lastName.length < 1) {
        this.error = "Please enter name!";
      } else {
        this.show = true;
        this.error = "";
      }
    },
  },
  watch: {
    firstName(newName) {
      this.result = `r name has been changed to ${newName}`;
    },
  },
};
</script>

<style scoped>
.red {
  color: crimson;
}
</style>
