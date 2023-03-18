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
  object-fit: cover;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px white;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b5b5b5;
  border-radius: 10px;
}
@media only screen and (max-width: 800px) {
  body {
    width: 100%;
    background-size: auto;
  }
}
</style>
