import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const prevCount = () => {
    if (count >= 5) {
      setCount((prev) => prev - 5);
    } else {
        setCount(0);
    }
  };

  const nextCount = () => {
    if (count < 1000) {
      setCount((prev) => prev + 2);
    }
  };

  const resetBtn = () => {
    setCount(0)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex items-center max-w-3xl flex-col border-2 gap-10 p-16 rounded-md">
          <div className="flex gap-10 items-center border-2 p-4 rounded-md">
            <button
              onClick={prevCount}
              className="bg-rose-400 p-1 px-4 rounded-full text-center text-2xl cursor-pointer"
            >
              -
            </button>
            <p className="text-xl font-bold ">Count : {count}</p>
            <button
              onClick={nextCount}
              className="bg-rose-400 p-1 px-4 rounded-full text-center text-2xl cursor-pointer"
            >
              +
            </button>
          </div>
        <button onClick={resetBtn} className="bg-rose-400 p-1 px-4 rounded-full text-center cursor-pointer">Reset</button>
        </div>
        {/* Reset Button */}
      </div>
    </div>
  );
}
