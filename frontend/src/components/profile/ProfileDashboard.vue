<template>
  <div id="dashboard" class="container">
    <div class="field">
      <div class="card">
        <div class="card-content">
          <div class="field">
            <p class="subtitle">User Information</p>
          </div>
          <div class="columns box mt-4">
            <div class="field">
              <p>
                <strong>Email:</strong>
                {{ user.email }}
              </p>
              <p v-if="user.first_name">
                <strong>First name</strong>
                :
                {{ user.first_name }}
              </p>
              <p v-if="user.last_name">
                <strong>Last name:</strong>
                {{ user.last_name }}
              </p>
              <p>
                <strong>Primary address</strong>:
              </p>
              <p>
                <strong>Primary card</strong>:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <OrderCard
      orderDate="August 27, 2020"
      totalPrice="12.87"
      shippingAddress="27 N 1st St"
      trackingNumber="474717482819"
      imageURL="https://picsum.photos/128"
      itemLocation="item location url"
    ></OrderCard>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OrderCard from "./OrderCard";
export default {
  name: "ProfileDashboard",
  components: {
    OrderCard,
  },
  computed: {
    ...mapState("account", ["user"]),
  },
};
</script>

<style>
</style>