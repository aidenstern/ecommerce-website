<template>
  <nav id="store-pagination" class="pagination is-small is-centered" role="navigation">
    <ul class="pagination-list">
      <!-- first page link -->
      <li></li>
      <li>
        <router-link
          :class="{'disabled': pageMeta.currentPage < 2}"
          :to="{ name: 'Store', params: { category: currentRoute.params.category }, query: { brand: currentRoute.query.brand, page: 1}}"
        >
          <span class="icon is-medium">
            <i class="fas fa-lg fa-angle-double-left"></i>
          </span>
        </router-link>
      </li>

      <!-- previous link -->
      <li>
        <router-link
          :class="{'disabled': pageMeta.currentPage == 1}"
          :to="{ name: 'Store', params: { category: currentRoute.params.category }, query: { brand: currentRoute.query.brand, page: pageMeta.currentPage - 1}}"
        >
          <span class="icon is-medium">
            <i class="fas fa-lg fa-angle-left"></i>
          </span>
        </router-link>
      </li>

      <!-- first page link as number -->
      <li v-if="pageMeta.currentPage > 2">
        <router-link
          class="pagination-link"
          :to="{ name: 'Store', params: { category: currentRoute.params.category }, query: { brand: currentRoute.query.brand, page: 1}}"
        >1</router-link>
      </li>

      <!-- if we are ahead of page 3 render ellipses -->
      <li v-if="pageMeta.currentPage > 3">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      
      <!-- pagination -->
      <li v-for="num in pageButtons" :key="`page-${num}`">
        <router-link
          class="pagination-link"
          :to="{ name: 'Store', params: { category: currentRoute.params.category }, query: { brand: currentRoute.query.brand, page: num}}"
          :class="{ 'is-current': num == pageMeta.currentPage }"
        >{{ num }}</router-link>
      </li>

      <!-- if there we are more than 2 pages behind last page, render elipses-->
      <li v-if="pageMeta.currentPage < pageMeta.lastPage - 2">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>

      <!-- last page link as number -->
      <li v-if="pageMeta.currentPage < pageMeta.lastPage - 1">
        <router-link
          class="pagination-link"
          :to="{ name: 'Store', params: { category: currentRoute.params.category }, query: { brand: currentRoute.query.brand, page: pageMeta.lastPage}}"
        >{{ pageMeta.lastPage }}</router-link>
      </li>

      <!-- next link -->
      <li>
        <router-link
          :class="{'disabled': pageMeta.currentPage > pageMeta.lastPage - 1}"
          :to="{ name: 'Store', params: { category: currentRoute.params.category }, query: { brand: currentRoute.query.brand, page: pageMeta.currentPage + 1}}"
        >
          <span class="icon is-medium">
            <i class="fas fa-lg fa-angle-right"></i>
          </span>
        </router-link>
      </li>

      <!-- last page link -->
      <li>
        <router-link
          :class="{'disabled': pageMeta.currentPage == pageMeta.lastPage}"
          :to="{ name: 'Store', params: { category: currentRoute.params.category }, query: { brand: currentRoute.query.brand, page: pageMeta.lastPage}}"
        >
          <span class="icon is-medium">
            <i class="fas fa-lg fa-angle-double-right"></i>
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StorePagination",
  data() {
    return {
      dataReady: false,
    };
  },
  computed: {
    ...mapGetters({ pageMeta: "shop/getPageMeta" }),
    currentRoute() {
      return this.$route;
    },
    pageButtons() {
      return this.loadPageData(
        this.pageMeta.currentPage,
        this.pageMeta.lastPage,
        3
      );
    },
  },
  methods: {
    loadPageData(currentPage, lastPage, siblingCount) {
      this.dataReady = false;
      // ensure current page isn't out of range
      if (currentPage < 1) {
        currentPage = 1;
      } else if (currentPage > lastPage) {
        currentPage = lastPage;
      }

      let startPage = 1;
      let endPage = 5;

      if (lastPage > 5) {
        // total pages more than 5 so calculate start and end pages
        let maxPagesBeforeCurrentPage = Math.floor(siblingCount / 2);
        let maxPagesAfterCurrentPage = Math.ceil(siblingCount / 2) - 1;

        if (currentPage <= maxPagesAfterCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = siblingCount;
        } else if (currentPage + maxPagesAfterCurrentPage >= lastPage) {
          // current page near the end
          startPage = lastPage - siblingCount + 1;
          endPage = lastPage;
        } else {
          // current page somewhere in the middle
          startPage = currentPage - maxPagesBeforeCurrentPage;
          endPage = currentPage + maxPagesAfterCurrentPage;
        }
      }
      // create array object with page button properties
      let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
        (i) => startPage + i
      );
      this.dataReady = true;
      return pages;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.disabled {
  cursor: not-allowed;
  color: gray;
}
</style>