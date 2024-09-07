import React from "react";
import { PopupProvider } from "./PopupContext";

export const ContextContainer = ({ children }) => (
  <PopupProvider>{children}</PopupProvider>
);
