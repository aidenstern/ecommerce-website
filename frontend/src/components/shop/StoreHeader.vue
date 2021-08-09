<template>
  <nav class="navbar has-shadow">
    <div class="container">
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">left</div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">right</div>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "StoreHeader",
};
</script>

<style scoped>
nav.navbar {
    min-height: unset;
    height: 2.5rem;
}
.navbar-item {
    min-height: unset;
    height: 2.5rem;
}
</style>