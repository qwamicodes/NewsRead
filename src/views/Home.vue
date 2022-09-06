<template>
  <NavVue />
  <HeaderVue />
  <CardsVue />
</template>

<script>
import NavVue from "../components/Nav.vue";
import HeaderVue from "../components/Header.vue";
import CardsVue from "../components/Cards.vue";
import getHeadlines from "@/composable/getHeadlines";
import { ref } from "vue";
import { mapState, useStore } from "vuex";

export default {
  name: "App",
  components: { NavVue, HeaderVue, CardsVue },
  setup() {
    const store = useStore();

    const search = ref(null);

    const { data, error, load } = getHeadlines(store.state.category);
    load();

    store.commit("setArticles", data);

    return { data, error, search };
  },
  computed: mapState["category"],
  watch: {
    category(oldValue, newValue) {
      console.log(oldValue, newValue);
    },
  },
};
</script>
