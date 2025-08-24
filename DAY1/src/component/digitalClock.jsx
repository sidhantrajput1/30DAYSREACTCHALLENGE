import React, { useEffect, useState } from "react";
// import DarkModeToggleComponent from './DarkModeToggleComponent';
import NavBar from "./NavBar";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);


  const hours = time.getHours();
  const mint = time.getMinutes();
  const second = time.getSeconds();
  const pmam = hours > 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  return (
    <section className="">
      {/* bg-gradient-to-r from-blue-400 via-sky-200/50 to-blue-300 */}
      <div className="max-w-7xl mx-auto">
        {/* <D */}
        <NavBar />
        <div className="flex items-center justify-center min-h-screen ">
          <div className="flex flex-col items-center justify-center shadow-md p-10 rounded-md w-[400px] h-[300px] bg-sky-200/90 transition-all hover:scale-120 duration-300 transform">
            <h1 className="font-bold text-4xl">{`${displayHours.toString().padStart(2, "0")}:${mint
              .toString()
              .padStart(2, "0")}:${second
              .toString()
              .padStart(2, 0)} ${pmam}`}</h1>
            <p className="font-bold text-gray-500">{time.toDateString().split(" ").slice(0,1)[0]+", "+time.toDateString().split(" ").slice(1).join(" ")}</p>
       </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalClock;
