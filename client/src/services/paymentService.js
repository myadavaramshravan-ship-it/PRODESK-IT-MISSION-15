import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const token = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const createCheckout = () =>
  axios.post(
    `${API}/payment/create-checkout-session`,
    {},
    token()
  );

export const upgradeUser = () =>
  axios.post(
    `${API}/payment/upgrade`,
    {},
    token()
  );