<template>
  <counter />
</template>

<script>
import Counter from "./views/Counter.vue";

export default {
  name: "App",
  components: {
    Counter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");

body {
  font-family: "Comfortaa", cursive;
  background-image: url(https://cdn.shopify.com/s/files/1/0070/7032/files/best-free-stock-photo-websites.jpg?v=1619036042&width=1024);
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
