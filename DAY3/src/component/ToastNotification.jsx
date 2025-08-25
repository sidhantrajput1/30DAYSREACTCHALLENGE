import React, { useState } from "react";
import Toast from "./Toast";

const ToastNotification = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000); // auto hide after 3s
  };

  return (
    <div className="bg-gray-900">
      <div className="min-h-screen flex items-center flex-col justify-center">
        <h3 className="text-white font-bold pb-10 text-2xl tracking-wide">
          Hey, I'm Toast Notification.
        </h3>

        <Toast text="✅ User Registered Successfully!" show={show}>
          <button
            onClick={handleClick}
            className="text-gray-200 px-6 py-3 border-2 rounded-lg 
                       shadow-lg shadow-blue-200/80 hover:shadow-blue-400/60  
                       cursor-pointer border-gray-600 text-lg bg-gray-800 
                       hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Click Me
          </button>
        </Toast>
      </div>
    </div>
  );
};

export default ToastNotification;
