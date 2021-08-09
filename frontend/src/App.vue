<template>
  <div id="app">
    <AppHeader />
    <main id="app-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script> 

<style scoped>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#app-content{
  flex: 1;
}
</style>