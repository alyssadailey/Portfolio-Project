import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// grabbing the HTML element with the ID root in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
// telling React to render app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);