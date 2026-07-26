import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
      />
    </AuthProvider>
  </BrowserRouter>
);