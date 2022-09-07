<template>
  <form @submit.prevent id="search-form">
    <input
      type="search"
      name="search"
      id="search"
      class="search__box"
      placeholder="Search anything"
      v-model="searchValue"
    />
    <button
      @click="searchNews"
      class="btn btn-primary btn-search"
      type="submit"
    >
      search
    </button>
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
        this.$store.commit("setLanguageValue", newValue);
      },
    },
  },
  methods: {
    searchNews() {
      this.$store.state.searchValue.length > 0
        ? this.$store.dispatch("getNews")
        : this.$store.dispatch("getHeadlines");
    },
  },
};
</script>
