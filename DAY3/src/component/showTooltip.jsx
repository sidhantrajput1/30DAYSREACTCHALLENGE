import React, { useState } from "react";

const ShowTooltip = ({children, text}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default ShowTooltip;
