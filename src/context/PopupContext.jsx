import { createContext, useContext, useEffect, useState } from "react";

const popupContext = createContext();

export const usePopupContext = () => {
  const context = useContext(popupContext);
  if (!context) throw new Error("Popup Provider is missing");
  return context;
};

export const PopupProvider = ({ children }) => {
  const [showSlider, setShowSlider] = useState(false);

  const openSlider = () => setShowSlider(true);

  return (
    <popupContext.Provider
      value={{
        setShowSlider,
        showSlider,
        openSlider,
      }}
    >
      {children}
    </popupContext.Provider>
  );
};
