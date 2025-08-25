import React, { useState } from "react";

const tabs = [
  {
    id: 1,
    icon: "🏡",
    sectionName: "Home",
    description: "🏡 Welcome to the Home Page",
  },
  {
    id: 2,
    icon: "👤",
    sectionName: "Profile",
    description: "👤 Welcome to the Profile Page",
  },
  {
    id: 3,
    icon: "⚙️",
    sectionName: "Settings",
    description: "⚙️ Welcome to the Settings Page",
  },
  {
    id: 4,
    icon: "ℹ️",
    sectionName: "About",
    description: "ℹ️ Welcome to the About Page",
  },
];

const TabsComponent = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        
        {/* Title */}
        <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
          Reusable Tabs Component
        </h3>
        <p className="text-center text-gray-400 mt-2">
          Switch between sections with smooth transitions 🚀
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mt-8 border-b border-gray-600 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  active === tab.id
                    ? "bg-gradient-to-r from-blue-400 to-indigo-500 text-black font-semibold shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.sectionName}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="mt-6 p-6 bg-gray-700/40 rounded-xl text-center text-gray-100 shadow-inner animate-fadeIn">
          <p className="text-xl">{tabs[active-1]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
