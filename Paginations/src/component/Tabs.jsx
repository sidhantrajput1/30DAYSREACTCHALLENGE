import { useState } from "react";

function Tabs({ tabs }) {
  const [activeTabs, setActiveTabs] = useState(tabs[0].label);

  
  return (
    <div className="py-20">
      <div className="flex gap-12 items-center justify-center">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTabs(tab.label)}
            className="bg-blue-400 px-5 py-3 rounded-md cursor-pointer"
            key={tab.label}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {tabs.map(
          (tab) =>
            activeTabs === tab.label && (
              <div key={tab.label} className="">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Tabs;
