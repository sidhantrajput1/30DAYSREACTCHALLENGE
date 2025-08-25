import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces. It helps create reusable UI components and makes web applications more efficient.",
  },
  {
    id: 2,
    question: "How does useState work?",
    answer:
      "The useState hook allows you to add state to a functional component. It returns a state variable and a function to update it.",
  },
  {
    id: 3,
    question: "What is the difference between props and state?",
    answer:
      "Props are used to pass data from parent to child components, while state is managed within a component to handle dynamic data.",
  },
  {
    id: 4,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the actual DOM. React updates it first and then efficiently updates only the changed parts of the real DOM.",
  },
  {
    id: 5,
    question: "How can I style React components?",
    answer:
      "You can style React components using CSS, CSS Modules, styled-components, TailwindCSS, or inline styles.",
  },
];

const Accordion = () => {
  const [isActive, setIsActive] = useState(null);
  return (
    <div className="bg-gray-600">
      <h3 className="text-center text-2xl  font-bold text-white">Accordion</h3>
      <div className="max-w-7xl mx-auto min-h-screen pt-10 ">
        {faqData.map((val, idx) => (
          <AccordionFeq
            isActive={isActive === idx}
            setIsActive={() => setIsActive(isActive === idx ? null : idx)}
            val={val}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

function AccordionFeq({ val, isActive, setIsActive }) {
  // const isOpen = isActive === idx;
  const handleActive = () => {
    setIsActive(!isActive);
  };
  //   const arr = Object.values(val);
  return (
    <div className="flex flex-col">
      <div className="bg-blue-100 flex flex-col gap-2 p-4 rounded-lg shadow-md mb-4">
        <div
          onClick={handleActive}
          className="flex justify-between cursor-pointer"
        >
          <p className={`font-semibold text-lg text-gray-800`}>
            {val.question}
          </p>
          <span className="font-bold text-xl">{isActive ? "-" : "+"}</span>
        </div>
        {isActive && (
          <p
            className={`text-gray-600 leading-relaxed transition-all duration-300 ${
              isActive ? "block" : "hidden"
            }`}
          >
            {val.answer}
          </p>
        )}
      </div>
    </div>
  );
}
