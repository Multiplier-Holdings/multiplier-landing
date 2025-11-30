import React from "react";

export const MultiplierLogo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <div className="absolute inset-0 border border-gold transform rotate-45" />
      <div className="absolute inset-2 border border-gold/50" />
    </div>
  );
};

export default MultiplierLogo;
