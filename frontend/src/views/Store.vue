<template>
  <div id="store">
    <StoreHeader></StoreHeader>
    <div class="container">
      <div class="columns mt-4">
        <StoreMenu></StoreMenu>
        <div id="store-content" class="column content mb-6">
          <StoreProduct
            v-for="product in products"
            :key="product.id"
            :price="product.price"
            :name="product.name"
            :imageURL="product.image"
          ></StoreProduct>
          <div class="container">
            <StorePagination></StorePagination>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import StoreMenu from "@/components/shop/StoreMenu";
import StoreProduct from "@/components/shop/StoreProduct";
import StoreHeader from "@/components/shop/StoreHeader";
import StorePagination from "@/components/shop/StorePagination";

export default {
  name: "Store",
  data() {
    return {};
  },
  props: {
    category: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: false,
    },
    page: {
      type: Number,
      required: false,
    },
  },
  components: {
    StoreMenu,
    StoreProduct,
    StoreHeader,
    StorePagination,
  },
  created() {
    this.loadData();
  },
  watch: {
    $route: "loadData",
  },
  computed: {
    ...mapGetters({
      products: "shop/getProducts",
    }),
  },
  methods: {
    ...mapActions("shop", ["loadProducts", "filterProducts"]),
    loadData() {
      // loading products (by category and/or page)
      let page = this.page || 1;
      let category = this.category;
      if (!category) {
        this.loadProducts(page);
      } else {
        this.filterProducts({ category, page });
        // console.log(this.$route);
      }
    },
  },
};
</script>

<style scoped>
#store-content {
  border-left: 2px solid #ddd;
}
</style>

