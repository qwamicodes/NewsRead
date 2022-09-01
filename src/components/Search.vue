<template>
  <form action="#" id="search-form">
    <input
      type="search"
      name="search"
      id="search"
      class="search__box"
      placeholder="Search anything"
      v-model="search"
    />
    <button class="btn btn-search" type="submit">search</button>
  </form>
</template>

<script>
export default {
  name: "SearchVue",
  data() {
    return {
      search: "",
    };
  },
};
</script>
