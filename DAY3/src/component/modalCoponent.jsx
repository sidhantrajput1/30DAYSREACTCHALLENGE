import React, { useState } from "react";
import Modal from "./Modal";

const ModaCoponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleModalWindow = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className="bg-gray-500 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 text-gray-100 p-8 rounded-2xl shadow-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Hey there, What's the new Today?
        </h3>
        <button onClick={handleModalWindow} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-all rounded-lg font-medium shadow-md cursor-pointer">
          Click Me 
        </button>
        
        {
            isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        }
      </div>
    </div>
  );
};

export default ModaCoponent;
