import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "what is HTML?",
    content:
      "HTML stands for Hyper Text Markup Language. it is used for creating web page. it give the body of web page.",
  },
  {
    id: 2,
    title: "what is CSS?",
    content:
      "CSS stands for Hyper Text Markup Language. it is used for creating web page. it give the body of web page.",
  },
  {
    id: 3,
    title: "what is JS?",
    content:
      "JS stands for Hyper Text Markup Language. it is used for creating web page. it give the body of web page.",
  },
  {
    id: 4,
    title: "what is NODEJS?",
    content:
      "NODE js is run time enviorement. it is backend technology used for server side logic",
  },
  {
    id: 5,
    title: "what is REACT?",
    content:
      "React is Js Libaray made by facebook developer. it is used for creating single page application and dynamic web page",
  },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col gap-3 p-4">
      {data.map((item, index) => (
        <div key={index} className="">
          <div onClick={() => handleToggle(index)} className="flex justify-between items-center bg-gray-700 p-2 text-white cursor-pointer">
            <h1>{item.title}</h1>
            <span className="text-xl font-bold">+</span>
          </div>
          {openIndex === index &&  <p className="text-gray-600 p-2 bg-gray-200">{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
