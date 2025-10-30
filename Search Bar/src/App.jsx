import React, { useEffect, useState } from "react";

const App = () => {
  const [result, setResult] = useState("");
  const [input, setInput] = useState([]);
  const [showResult, setShowResult] = useState(false)
  // caching
  const [cache, setCache] = useState({})

  const fetchData = async () => {
    if (cache[input]) {
      setResult(cache[input])
      return;
    }
    try {
      console.log("API CALLS", input)
      const response = await fetch(
        "https://dummyjson.com/recipes/search?q="+input
      );
      const data = await response.json();
      // console.log(data?.recipes);
      setResult(data?.recipes);

      setCache(prev => ({...prev, [input] : data?.recipes}))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300) ;

    return () => {
      clearTimeout(timer)
    }
  }, [input]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 to-blue-100 py-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
        🍕 Auto Complete Search Bar
      </h1>

      <div className="relative w-[350px]">
        {/* Input Box */}
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm transition"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />

        {/* Search Results */}
        {showResult && result?.length > 0 && (
          <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {result.map((data) => (
              <ul key={data.id}>
                <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer text-gray-700 transition-colors">
                  {data.name}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
