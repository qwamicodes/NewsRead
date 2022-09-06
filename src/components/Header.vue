<template>
  <header class="header">
    <h3 class="primary-heading header__title">
      Find all your <span class="color-heading">favorite</span> news in one
      <span class="color-heading">place</span>
    </h3>
    <SearchVue />
    <TabContainerVue />
    <FilterVue />
  </header>
</template>

<script>
import SearchVue from "./Search.vue";
import FilterVue from "./Filter.vue";
import TabContainerVue from "./TabContainer.vue";

export default {
  name: "HeaderVue",
  data() {
    return {
      category: "",
    };
  },
  components: { SearchVue, FilterVue, TabContainerVue },
};
</script>
