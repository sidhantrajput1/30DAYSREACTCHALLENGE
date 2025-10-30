import React, { useCallback, useState } from "react";

const DisplayList = ({ items, setItems }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const onDelete = useCallback(
    (text) => {
      setItems((prev) => prev.filter((item) => item !== text));
      setCheckedItems((prev) => prev.filter((i) => i !== text));
    },
    [setItems]
  );

  const handleCheckBox = useCallback((text) => {
    setCheckedItems((prev) =>
      prev.includes(text)
        ? prev.filter((item) => item !== text)
        : [...prev, text]
    );
  }, []);

  return (
    <div className="mt-6 flex flex-col items-center">
      <ul className="w-full max-w-md space-y-3">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">No items added yet.</p>
        ) : (
          items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item)}
                  onChange={() => handleCheckBox(item)}
                />
                <span
                  className={`font-medium ${
                    checkedItems.includes(item)
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {item}
                </span>
              </div>
              <button
                onClick={() => onDelete(item)}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DisplayList;
