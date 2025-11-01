import React, { useState } from "react";
import { nestedAccordianData } from "./data.js";

const Accordian = ({ items }) => {
  const [isOpenIdx, setIsOpenIdx] = useState(null);

  const handleOnToggle = (index) => {
    setIsOpenIdx(isOpenIdx === index ? null : index);
  };

  return (
    <div className="">
      <div className="p-2">
        {items.map((item, index) => (
          <div key={index} className="">
            <div
              onClick={() => handleOnToggle(index)}
              className="bg-gray-600 text-white p-2 cursor-pointer flex justify-between mt-2"
            >
              <h2 className="font-medium ">{item.title}</h2>
              <span className="font-bold">
                {isOpenIdx === index ? "-" : "+"}
              </span>
            </div>
            {isOpenIdx === index && (
              <p className="p-2 bg-gray-300">{item.content}</p>
            )}

            {item?.children && isOpenIdx === index && (
              <Accordian items={item.children} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="p-4">
        <h1  className="text-center font-bold text-2xl">🍕 Nested Accordian</h1>
      <Accordian items={nestedAccordianData} />
    </div>
  );
};

export default App;
