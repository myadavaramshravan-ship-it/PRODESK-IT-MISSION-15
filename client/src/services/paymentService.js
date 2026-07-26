import API from "./api";

export const createCheckout = () =>
  API.post("/payment/create-checkout-session");

export const upgradeUser = () =>
  API.post("/payment/upgrade");