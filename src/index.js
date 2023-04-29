import React from "react";
import ReactDOM from "react-dom/client";

// Import css
import "./index.css";

// Import components
import App from "./App";

// Import reportWebVitals to measure the real life performance the app
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
