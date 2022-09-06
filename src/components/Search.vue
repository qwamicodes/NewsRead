<template>
  <form action="#" id="search-form">
    <input
      type="search"
      name="search"
      id="search"
      class="search__box"
      placeholder="Search anything"
      v-model="searchValue"
    />
    <button class="btn btn-search" type="submit">search</button>
  </form>
</template>

<script>
export default {
  name: "SearchVue",
  computed: {
    searchValue: {
      get() {
        return this.$store.state.searchValue;
      },
      set(newValue) {
        this.$store.commit.setLanguageValue(newValue);
      },
    },
  },
};
</script>
