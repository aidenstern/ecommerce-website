<template>
  <div id="store-product" class="container">
    <div class="columns is-marginless">
      <div class="column is-2">
        <img :src="imageURL" alt="random image" />
      </div>
      <div class="column">
        <p class="is-size-4 has-text-weight-semibold mb-1">{{ name }}</p>
        <div class="mb-1">rating here</div>
        <p><span class="is-size-6">$</span>{{ price }}</p>
      </div>
    </div>
    <hr class="is-marginless" />
  </div>
</template>

<script>
export default {
  name: "StoreProduct",
  props: ["price", "imageURL", "name"],
};
</script>

<style>
hr {
  background-color: #ddd;
}
</style>