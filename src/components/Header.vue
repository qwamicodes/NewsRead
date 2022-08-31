<template>
  <header>Header</header>
  <SearchVue />
  <TabContainerVue />
  <FilterVue />
</template>

<script>
import SearchVue from "./Search.vue";
import FilterVue from "./Filter.vue";
import TabContainerVue from "./TabContainer.vue";

export default {
  name: "HeaderVue",
  components: { SearchVue, FilterVue, TabContainerVue },
};
</script>
