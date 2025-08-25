import React from "react";
import ShowTooltip from "./showTooltip";

const Tooltip = () => {
  return (
    <div className="bg-gray-900 ">
      <div className="min-h-screen flex items-center justify-center">
        <div className="">
          <ShowTooltip text="Add to libaray">
            <button className="text-gray-200 px-6 py-3 border-2 rounded-lg shadow-lg shadow-blue-200/80 hover:shadow-blue-400/60  cursor-pointer border-gray-500 text-lg bg-gray-800">
              Hover
            </button>
          </ShowTooltip>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
