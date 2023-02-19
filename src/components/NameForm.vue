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
      <p>
        Hi {{ firstName }} {{ lastName }}! First name has been watched and is
        now updated to: {{ result }}
      </p>
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
      this.result = `${newName}`;
    },
  },
};
</script>

<style scoped>
.red {
  color: crimson;
}
</style>
