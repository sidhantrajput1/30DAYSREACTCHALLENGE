# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



- Progress Bar
- Controlled Form
- Multi-Step Form



<!-- import React, { useState } from "react";

const ProgressBar = () => {
    const [progres, setProgres] = useState(10);

    const handelChange = (e) => {
        setProgres(e.target.value)
    }

  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-4xl text-center">
        <h3 className="text-xl font-semibold mb-6">Progress Bar</h3>
        <div  className="h-10 w-[300px] border-2 border-gray-400 rounded-full bg-gray-200 shadow-inner">
            <div style={{width : `${progres}%`}} className="h-full rounded-full bg-blue-500 transition-all duration-300"></div>
        </div>
        <input className="mt-6 w-[300px]" min="0" max="100" value={progres} onChange={handelChange} type="range" />
      </div>
    </div>
  );
};

export default ProgressBar; -->
