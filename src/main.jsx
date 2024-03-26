import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "https://63918j1f-7215.euw.devtunnels.ms/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.post["Accept"] = "application/json";
// axios.defaults.withCredentials = true;
// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
