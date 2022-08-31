<template>
  <NavVue />
  <HeaderVue />
  <CardsVue />
</template>

<script>
import NavVue from "./components/Nav.vue";
import HeaderVue from "./components/Header.vue";
import CardsVue from "./components/Cards.vue";

export default {
  name: "App",
  components: { NavVue, HeaderVue, CardsVue },
};
</script>
