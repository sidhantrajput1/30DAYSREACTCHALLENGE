import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";

const PAGE_SIZE = 12;

const Pagination = () => {
  const [product, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=500");
      const data = await response.json();
      // console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = product.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const startIdx = currentPage * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;

  const handlePagesChange = (n) => {
    setCurrentPage(n);
  };

  const handleNextPage = () => {
    setCurrentPage((next) => next + 1);
    // setCurrentPage( currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => prev - 1)
  }

  return (
    <div className="">
      <Cart
        startIdx={startIdx}
        endIdx={endIdx}
        product={product}
        setUser={setProducts}
      />
      <div className="flex flex-col items-center">
        <ul className="flex gap-4 m-2 ">
          <button disabled={currentPage === 0}  onClick={handlePrevPage} className="text-xl font-extrabold cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors bg-gray-100 hover:bg-indigo-50 px-4 py-2 rounded-full shadow-sm">
            &larr;
          </button>
          {Array.from({ length: noOfPages }, (_, i) => (
            <li
              key={i}
              className={`p-3 cursor-pointer rounded-md border ${currentPage === i ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => handlePagesChange(i)}
            >
              {i}
            </li>
          ))}
          <button disabled={currentPage === noOfPages-1} onClick={handleNextPage} className="text-xl font-extrabold cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors bg-gray-100 hover:bg-indigo-50 px-4 py-2 rounded-full shadow-sm">
            &rarr;
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
