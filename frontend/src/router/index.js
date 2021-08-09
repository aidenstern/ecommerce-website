import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Checkout from "@/views/Checkout.vue";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import Store from "@/views/Store.vue";

// Components
import ProfileComponentRoutes from "@/components/profile";

// Vuex store
import store from "@/store/index.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      children: ProfileComponentRoutes,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/store/:category?",
      name: "Store",
      component: Store,
      props: (route) => ({
        category: route.params.category,
        brand: route.query.brand,
        page: parseInt(route.query.page),
      })
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to !== from) {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (store.state.account.status.loggedIn) {
        next();
        return;
      }
      next("/");
    } else {
      next();
    }
  }
});

export default router;
