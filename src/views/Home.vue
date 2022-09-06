<template>
  <NavVue />
  <HeaderVue />
  <CardsVue />
</template>

<script>
import NavVue from "../components/Nav.vue";
import HeaderVue from "../components/Header.vue";
import CardsVue from "../components/Cards.vue";
import { useStore } from "vuex";
import { onMounted, watch } from "vue";

export default {
  name: "App",
  components: { NavVue, HeaderVue, CardsVue },
  setup() {
    const store = useStore();

    onMounted(() => store.dispatch("getHeadlines"));

    watch(
      () => store.getters.getCategory,
      () => {
        store.dispatch("getHeadlines");
      }
    );

    watch(
      () => store.getters.getSort,
      () => {
        store.dispatch("getHeadlines");
      }
    );

    return {};
  },
};
</script>
