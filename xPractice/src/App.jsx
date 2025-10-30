import React, { useEffect, useState } from "react";

const App = () => {
  // https://dummyjson.com/recipes/search?q=
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const fetchData = async () => {

    if (!input.trim()) {
      setResult([]);
      return;
    }


    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );
      const data = await response.json();
      console.log(data?.recipes);
      setResult(data?.recipes || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <h1 className="text-4xl text-center font-extrabold text-gray-800 mb-10">
        🍕 Auto Complete Search Bar
      </h1>

      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="search here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResult(true)}
          className="border-1 outline-none p-2"
        />
      </div>

      {showResult && input && result.length > 0 && (
        <div className="">
          {result.map((data) => (
            <div key={data.id} className="">
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
