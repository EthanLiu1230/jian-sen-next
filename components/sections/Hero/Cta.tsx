import React from "react";

export function Cta({ children }) {
  return (
    <div className="inline-block py-2 px-3 text-white rounded-md md:px-4 md:py-3 bg-primary">
      {children}
    </div>
  );
}
