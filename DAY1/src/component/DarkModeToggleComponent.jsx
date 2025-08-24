import React, { useEffect, useState } from "react";

const DarkModeToggleComponent = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <div className="pt-4 px-4">
      <div
        onClick={toggle}
        className={`border w-10 rounded-2xl cursor-pointer flex items-center px-1 transition-all duration-500 ${
          isDark ? "justify-end bg-gray-800" : "justify-start bg-yellow-200"
        }`}
      >
        {isDark ? <span>🌙</span> : <span>☀️</span>}
      </div>
    </div>
  );
};

export default DarkModeToggleComponent;
