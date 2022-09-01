<template>
  <div class="filter">
    <div class="filter__title">all news</div>
    <div class="filter__sort">
      sort by:
      <select name="sort" id="sort" class="dropdown">
        <option value="popularity" class="dropdown__value">Popularity</option>
        <option value="publishedAt" class="dropdown__value">
          Published At
        </option>
        <option value="relevancy" class="dropdown__value">Relevancy</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterVue",
};
</script>
