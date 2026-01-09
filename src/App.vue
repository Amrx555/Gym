<template>
  <div id="app">
    <NavbarView />
    <router-view />
    <FooterView />
  </div>
</template>

<script>
import NavbarView from "./components/NavbarView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    NavbarView,
    FooterView,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background: #f4f4f4;
}
</style>
