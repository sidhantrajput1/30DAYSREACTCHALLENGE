import React, { useState } from "react";
import DisplayList from "./DisplayList";

const InputBox = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setItems((prev) => [...prev, trimmed]);
    setInput("");
  };

  console.log(items);

  return (
    <div onSubmit={handleSubmit} className="mt-8">
      <form className="flex gap-2 justify-center ">
        <input
          type="text"
          placeholder="Add in list...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 outline-none p-2 rounded-md"
        />

        <button type="submit" className="bg-blue-400 rounded-md px-5">
          Add
        </button>
      </form>

      <DisplayList items={items} setItems={setItems} />
    </div>
  );
};

export default InputBox;
