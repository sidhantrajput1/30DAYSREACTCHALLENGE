import React, { useState } from "react";
import { treeData } from "./data.js";

const CheckBox = ({ nodes, checked, setChecked }) => {
  const handleOnChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      //  if children are present , add all of the new state

      const updateChildren = (node) => {
        node?.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child?.children && updateChildren(child);
        });
      };

      updateChildren(node);

      const verifyChecked = (node) => {
       if(!node.children) return newState[node.id] || false;

       const allChildrenChecked = node.children.every(child => verifyChecked(child))

       newState[node.id] = allChildrenChecked;

       return allChildrenChecked;
      };

      treeData.forEach(node => verifyChecked(node))

      return newState;
    });
  };

  console.log(checked);
  return (
    <div style={{ marginLeft: "20px" }}>
      {nodes.map((data) => (
        <div key={data.id} className="">
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={checked[data.id] || false}
              onChange={(e) => handleOnChange(e.target.checked, data)}
            />
            <label className="font-bold">{data.label}</label>
          </div>

          {data.children && data.children.length > 0 && (
            <CheckBox
              nodes={data.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [checked, setChecked] = useState({});

  return (
    <div>
      <CheckBox nodes={treeData} checked={checked} setChecked={setChecked} />
    </div>
  );
};

export default App;
