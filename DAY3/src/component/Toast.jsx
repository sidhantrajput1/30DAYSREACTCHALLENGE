import React from "react";

const Toast = ({ show, children, text }) => {
  return (
    <div className="relative">
      {children}

      {show && (
        <div
          className="fixed bottom-6 right-6 px-6 py-3 rounded-lg 
                     bg-gray-100 text-black font-medium shadow-lg 
                     shadow-green-400/40 animate-slide-up"
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Toast;
