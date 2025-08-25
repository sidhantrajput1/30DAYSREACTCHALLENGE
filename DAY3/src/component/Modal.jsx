import React from "react";

const Modal = ({ setIsOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 flex justify-center items-center bg-gray bg-opacity-90 backdrop-blur-sm z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[500px] h-[400px] bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl cursor-pointer"
        >
          ✖
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">Modal Window</h1>

        <p className="text-gray-600 text-center">
          Hey, I'm a modal window 👋. You can use me to show messages, forms, or
          alerts.
        </p>

        <p className="text-gray-600 text-center pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          necessitatibus aliquam, eum, pariatur reprehenderit repellat
          consectetur tempora excepturi, ad consequuntur itaque! Maiores ratione
          alias eligendi officia saepe iusto et pariatur!
        </p>
        {/* Action Buttons */}
        <div className="mt-auto flex gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 cursor-pointer"
          >
            Confirm
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="px-5 py-2 bg-gray-300 rounded-lg shadow hover:bg-gray-400 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
