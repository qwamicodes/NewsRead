<template>
  <NavVue />
  <HeaderVue :search="search" />
  <CardsVue :articles="data" />
</template>

<script>
import NavVue from "../components/Nav.vue";
import HeaderVue from "../components/Header.vue";
import CardsVue from "../components/Cards.vue";
import getNews from "@/composable/getNews";
import { onUpdated, ref } from "vue";

export default {
  name: "App",
  components: { NavVue, HeaderVue, CardsVue },
  setup() {
    const search = ref(null);
    const { data, error, load } = getNews();
    load();

    onUpdated(() => {
      console.log(search.value);
    });

    return { data, error, search };
  },
};
</script>
