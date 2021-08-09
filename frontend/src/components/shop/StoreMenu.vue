<template>
  <div class="column is-narrow">
    <div class="menu pr-3">
      <p class="menu-label">Department</p>
      <ul class="menu-list">
        <!-- categories -->
        <li v-for="category in categories" :key="category.id">
          <router-link
            :to="{ name: 'Store', params: { category: category.slug }}"
          >{{ category.name }}</router-link>
          <ul class="menu-list">
            <li v-for="subcategory in category.children" :key="subcategory.id">
              <router-link
                :to="{ name: 'Store', params: { category: subcategory.slug }}"
              >{{ subcategory.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- brands -->
      <p class="menu-label pt-4">Brands</p>
      <ul class="menu-list">
        <li v-for="brand in brands" :key="brand">
          <label class="checkbox">
            <input type="checkbox" />
            {{ brand }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "StoreMenu",
  async mounted() {
    await this.loadCategories();
  },
  computed: {
    ...mapGetters({
      categories: "shop/getCategories",
      brands: "shop/getBrands",
    }),
  },
  methods: {
    ...mapActions("shop", ["loadCategories"]),
  },
};
</script>

<style scoped>
.menu-list label {
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: 0.5em 0.75em;
}

input.checkbox {
  margin: 0px 0px 0px 0px;
}

label.checkbox input {
  margin: 0px 5px 0px 3px;
}
</style>