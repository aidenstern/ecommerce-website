import { shopService } from "@/services";

const state = {
  pageMeta: {},
  categories: [],
  products: [],
  brands: [],
};

const actions = {
  loadProducts({ commit, dispatch }, page) {
    shopService.callProductsListView(page).then(
      (resp) => {
        commit("setProducts", resp.results);
        delete resp.results;
        dispatch("parsePageMeta", resp);
        dispatch("loadBrands");
      },
      (err) => console.log(err)
    );
  },
  loadCategories({ commit }) {
    shopService.callCategoriesListView().then(
      (resp) => {
        commit("setCategories", resp);
      },
      (err) => console.log(err)
    );
  },
  loadBrands({ commit }) {
    shopService.callBrandsView().then(
      (resp) => {
        commit("setBrands", resp);
      },
      (err) => console.log(err)
    );
  },
  filterProducts({ commit, dispatch }, { category, page }) {
    shopService.filterProductsListView(category, page).then(
      (resp) => {
        commit("setProducts", resp.results);
        delete resp.results;
        dispatch("parsePageMeta", resp);
        dispatch("filterBrands", category);
      },
      (err) => console.log(err)
    );
  },
  filterBrands({ commit }, category) {
    shopService.filterBrandsView(category).then(
      (resp) => {
        commit("setBrands", resp)
      },
      (err) => console.log(err)
    );
  },
  parsePageMeta({ commit }, data) {
    var regex = /[?&]([^=#]+)=([^&#]*)/g;
    var match;
    var page;
    if (data.next) {
      while ((match = regex.exec(data.next))) {
        data[match[1]] = match[2];
        page = data.page - 1;
      }
    } else {
      while ((match = regex.exec(data.previous))) {
        data[match[1]] = match[2];
      }
      page = parseInt(data.page) + 1;
    }
    delete data.page;
    data["previousPage"] = page - 1;
    data["currentPage"] = page;
    data["nextPage"] = page + 1;
    if ("page_size" in data) {
      data["lastPage"] = Math.ceil(data.count / data.page_size);
    } else {
      data["lastPage"] = Math.ceil(data.count / 10);
    }
    commit("setPageMeta", data);
  },
};

const mutations = {
  setBrands(state, data) {
    const arr = data.slice(0, 10)
    state.brands = arr;
  },
  setProducts(state, data) {
    state.products = data;
  },
  setCategories(state, data) {
    state.categories = data;
  },
  setPageMeta(state, data) {
    state.pageMeta = data;
  },
};

const getters = {
  getBrands(state) {
    return state.brands;
  },
  getProducts(state) {
    return state.products;
  },
  getCategories(state) {
    return state.categories;
  },
  getPageMeta(state) {
    return state.pageMeta;
  },
};

export const shop = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
