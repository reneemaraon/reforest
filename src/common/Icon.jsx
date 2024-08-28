import React from "react";

const Icon = ({ sizeRules, fill, children }) => {
  return (
    <div className={`${sizeRules || "w-4 h-4"} ${fill || "fill-text-darker"}`}>
      {children}
    </div>
  );
};

export default Icon;
