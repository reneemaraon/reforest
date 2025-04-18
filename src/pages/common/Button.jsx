import React from "react";

const CustomButton = ({
  disabled,
  styleSet,
  size,
  edge,
  onClick,
  children,
}) => {
  const styleSets = {
    primary: "bg-primary-green text-white hover:bg-primary-green-hv",
    secondary:
      "bg-none border border-[0.5px] border-white/60 hover:text-slate-150 text-white hover:bg-white/15",
    gradient:
      "bg-gradient-to-r from-[#3876BF] via-sky-500 to-brand-pink text-white hover:from-cyan-700 hover:via-sky-600 hover:to-cyan-600",
    dark: "bg-text-darker text-theme-base hover:bg-gray-700",
    inverse:
      "border-[0.5px] border-light-brown/50 hover:bg-light-brown/5 text-text-darker hover:bg-opacity-30",
    light: "border bg-brand-gray-light text-text-darker hover:bg-opacity-70",
    lavender: " bg-brand-lavender text-theme-base hover:bg-opacity-70",
  };

  // Default to 'primary' if the specified style set doesn't exist
  const selectedStyle = styleSets[styleSet] || styleSets["primary"];

  const sizeSets = {
    defaultSize: "h-10 px-4 py-3 gap-2 text-xs",
    defaultResize: "h-8 md:h-10 px-3 md:px-4 py-3 gap-2 text-xxs md:text-xs",
    smallSize: "h-8 px-2.5 py-2 gap-1 font-light text-xs",
    smallResize:
      "h-6 px-0.75 py-1.5 sm:h-8 sm:px-2.5 sm:py-2 gap-1 font-light sm:text-xs text-[10px]",
  };

  const selectedSize = sizeSets[size] || sizeSets["defaultResize"];

  const edgeStyles = {
    defaultEdge: "rounded-lg",
    rounded: "rounded-full",
  };

  const selectedEdge = edgeStyles[edge] || edgeStyles["rounded"];

  const stateStyle = disabled ? "opacity-50 pointer-events-none" : "";

  return (
    <button
      className={`button-transition justify-center text-nowrap items-center inline-flex ${stateStyle} ${selectedEdge} ${selectedSize} ${selectedStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
