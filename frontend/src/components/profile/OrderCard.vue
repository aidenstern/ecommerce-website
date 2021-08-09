<template>
  <div class="field">
    <div class="card">
      <div class="card-content">
        <div class="field">
          <div class="columns is-mobile">
            <div class="column">
              <span class="subtitle">Order Placed</span>
              <p class="has-text-weight-normal">{{ orderDate }}</p>
            </div>

            <div class="column">
              <span class="subtitle">Total</span>
              <p class="has-text-weight-normal"> ${{ totalPrice }}</p>
            </div>

            <div class="column">
              <span class="subtitle">Ship to</span>
              <p class="has-text-weight-normal">{{ shippingAddress }}</p>
            </div>

            <div class="column">
              <span class="subtitle">Tracking number</span>
              <p class="has-text-weight-normal">{{ trackingNumber }}</p>
            </div>
          </div>
        </div>
        <div class="field pt-4">
          <div class="columns box">
            <div class="column">
              <img :src="imageURL" alt="random image" />
            </div>
            <div class="column">
              <a>{{ itemLocation }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  props: [
    "orderDate",
    "totalPrice",
    "shippingAddress",
    "trackingNumber",
    "imageURL",
    "itemLocation",
  ],
};
</script>

<style>
</style>