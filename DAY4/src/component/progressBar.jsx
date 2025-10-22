import React, { useState } from "react";

const ProgressBar = () => {
    const [progres, setProgres] = useState(0);
    const handleChange = (e) => {
        setProgres(e.target.value);
    }
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-4xl text-center">
        <h3 className="text-xl font-semibold mb-6">Progress Bar</h3>
        <div className="h-10 w-[300px] border-2 border-gray-400 rounded-full bg-gray-200 shadow-inner overflow-hidden">
            <div style={{ width : `${progres}%`}} className=" w-full h-full rounded-full bg-blue-500"></div>
        </div>

        <input className="mt-6 h-10 w-[300px]" value={progres} onChange={handleChange} type="text" min="0" max="100"  />
      </div>
    </div>
  );
};

export default ProgressBar;
