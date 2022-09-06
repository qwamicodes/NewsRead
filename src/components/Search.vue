<template>
  <form action="#" id="search-form">
    <input
      type="search"
      name="search"
      id="search"
      class="search__box"
      placeholder="Search anything"
    />
    <button class="btn btn-search" type="submit">search</button>
  </form>
</template>

<script>
export default {
  name: "SearchVue",
  props: ["search"],
  data() {
    return {
      // search: null,
    };
  },
};
</script>
