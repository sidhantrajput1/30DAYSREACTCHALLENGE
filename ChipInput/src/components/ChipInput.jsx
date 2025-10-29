import React, { useState } from "react";

const ChipInput = () => {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setItem((prev) => [...prev, input]);
    setInput("");
  };

  const handleDelete = (text) => {
    setItem(prev => prev.filter(item => item !== text))
  }

  return (
    <div className="mt-10">
      <form onSubmit={handleOnSubmit} className="flex gap-2 justify-center">
        <input
          type="text"
          placeholder="Add here..."
          className="border-2 p-2 outline-none rounded-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className="py-2 px-5 bg-blue-400 rounded-md">
          Add
        </button>
      </form>

      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {item.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full"
          >
            <span className="">{data}</span>
            <button onClick={() => handleDelete(data)} className="text-red-400 font-bold">❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipInput;
