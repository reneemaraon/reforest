import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextContainer } from "./context/ContextContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextContainer>
        <App />
      </ContextContainer>
    </React.StrictMode>
  </BrowserRouter>
);
