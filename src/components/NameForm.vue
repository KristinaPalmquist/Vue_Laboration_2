<script setup>
import MyButton from "../components/MyButton.vue";
</script>

<template>
  <div>
    <h3>name form</h3>
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
      <my-button :value="`${text}`" @click="onClick" class="btn" />
    </form>
    <div v-if="show">
      <div>
        <h2>Hi {{ firstName }} {{ lastName }}!</h2>
      </div>
    </div>
    <div class="red">{{ error }}</div>
  </div>
</template>

<script>
export default {
  //   components: {
  //     MyButton,
  //   },
  data() {
    return {
      firstName: "",
      lastName: "",
      error: "",
      show: false,
      text: "Click me!",
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
};
</script>

<style scoped>
.red {
  color: crimson;
}
</style>
