import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Axios } from "axios";

// Axios.defaults.baseUrl = "https://63918j1f-7215.euw.devtunnels.ms/";
// Axios.defaults.headers.post["Content-Type"] = "application/json";
// Axios.defaults.headers.post["Accept"] = "application/json";
// Axios.defaults.withCredentials = true;
// Axios.interceptors.request.use(function (config) {
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
