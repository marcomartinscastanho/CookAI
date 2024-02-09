import React from "react";
import { PiBowlFood } from "react-icons/pi";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <PiBowlFood className="w-16 h-16 text-primary" />
      <h2 className="text-4xl font-extrabold text-primary mr-auto font-serif">
        CookAI
      </h2>
    </div>
  );
};

export default SidebarHeader;
