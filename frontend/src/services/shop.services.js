import axios from "axios";

export const shopService = {
  callProductsListView,
  callCategoriesListView,
  filterProductsListView,
  filterBrandsView,
  callBrandsView,
};

const service = axios.create({
  baseURL: "http://localhost:8002/api/",
});

function callProductsListView(page) {
  let full_url = ''
  if (page) {
    full_url = `products/?page=${page}`
  } else {
    full_url = 'products/'
  }
  return service.get(full_url).then((resp) => {
    return resp.data;
  });
}

function callCategoriesListView() {
  return service.get('categories/').then((resp) => {
    return resp.data;
  });
}

function filterProductsListView(category, page) {
  let full_url = ''
  if (page) {
    full_url = `products/?page=${page}&search=${category}`
  } else {
    full_url = `products/?search=${category}`
  }
  return service.get(full_url).then((resp) => {
    return resp.data;
  });
}

function filterBrandsView(category) {
  return service.get(`brands/?category=${category}`).then((resp) => {
    return resp.data;
  });
}

function callBrandsView() {
  return service.get('brands/').then((resp) => {
    return resp.data;
  });
}