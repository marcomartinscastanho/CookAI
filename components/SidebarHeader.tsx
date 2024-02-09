import React from "react";
import { PiBowlFood } from "react-icons/pi";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <PiBowlFood className="w-10 h-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary mr-auto font-serif">
        CookAI
      </h2>
    </div>
  );
};

export default SidebarHeader;
