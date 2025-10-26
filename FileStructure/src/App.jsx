import "./index.css";
import data from "./data.json";
import { useState } from "react";

function List({ list, addNodeToList, deleteFromList }) {
  const [expandedFolders, setExpandedFolders] = useState({});

  const handleToggleFolder = (id) => {
    setExpandedFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container">
      {list.map((data) => (
        <div key={data.id}>
          <div className="folders">
            {data.children ? (
              <span
                className="toggle icon"
                onClick={() => handleToggleFolder(data.id)}
              >
                {expandedFolders[data.id] ? "📂" : "📁"}
              </span>
            ) : (
              <span className="icon">📄</span>
            )}
            <span className="name">{data.name}</span>

            {data?.isFolder && (
              <span onClick={() => addNodeToList(data.id)}>
                <img
                  className="addfoldericon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s"
                />
              </span>
            )}

            <span onClick={() => deleteFromList(data.id)}>
              <img
                className="addfoldericon"
                src="https://cdn-icons-png.flaticon.com/512/4338/4338747.png"
              />
            </span>
          </div>

          {data.children && expandedFolders[data.id] && (
            <List
              list={data.children}
              addNodeToList={addNodeToList}
              deleteFromList={deleteFromList}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [isData, setIsData] = useState(data);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter name");
    if (!name) return;

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...(node.children || []),
              { id: Date.now().toString(), name, isFolder: true, children: [] },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setIsData((prev) => updateTree(prev));
  };

  const deleteFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };

    setIsData((prev) => updateTree(prev));
  };

  return (
    <div className="App">
      <h1>File Explorer</h1>
      <List
        list={isData}
        addNodeToList={addNodeToList}
        deleteFromList={deleteFromList}
      />
    </div>
  );
}
