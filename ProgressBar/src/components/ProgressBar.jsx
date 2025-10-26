import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="p-4">
      <div className={`border-2 `}>
        <div
          style={{ width: `${progress}%` }}
          className={`overflow-hidden  p-3 bg-green-400 transition-all ease-in duration-300 text-white`}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
