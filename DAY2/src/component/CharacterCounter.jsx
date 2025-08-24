import React, { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");
  let maxLimit = 10;

  const count = text.length % maxLimit;

  const resetHandler = () => {
    setText("");
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-6 transition-all duration-300 hover:shadow-blue-500/20">
        
        {/* Title */}
        <h3 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
          ✨ Character Counter
        </h3>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`w-full p-4 rounded-xl border-2 focus:ring-2 outline-none resize-none transition-all duration-300 
            ${
              text.length >= maxLimit
                ? "border-red-500 text-red-400 focus:ring-red-400"
                : "border-green-400 focus:ring-green-400"
            }`}
          rows={5}
          maxLength={maxLimit}
          placeholder="✍️ Type your message..."
        />

        {/* Counter */}
        <p
          className={`text-sm font-medium ${
            text.length >= maxLimit ? "text-red-400" : "text-gray-300"
          }`}
        >
          Characters used: {count} / {maxLimit}
        </p>

        {/* Reset Button */}
        <button
          className="px-6 py-2 rounded-full cursor-pointer bg-gradient-to-r from-blue-400 to-indigo-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 text-black font-semibold transition-all duration-300"
          onClick={resetHandler}
        >
          🔄 Reset
        </button>

        {/* Warning */}
        {text.length >= maxLimit && (
          <p className="text-red-400 font-semibold animate-pulse">
            ⚠️ You have reached the limit!
          </p>
        )}
      </div>
    </div>
  );
};

export default CharacterCounter;
