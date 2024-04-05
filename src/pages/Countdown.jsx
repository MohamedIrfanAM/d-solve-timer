import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import tinkerhub from "../assets/tinkerhub_logo.png";
import iet from "../assets/iet_logo.png";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
    ``;
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2024-04-05T17:15:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }
    return timeLeft;
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  
  return (
    <div
      id="countdown"
      className="scroll-smooth snap-center bg-primary relative h-screen font-schabo text-ivory text-center flex flex-col justify-center items-center gap-0 sm:p-8 overflow-hidden"
      style={{ 
        background: "rgb(148,104,250)",
        background: "linear-gradient(90deg, rgba(148,104,250,1) 8%, rgba(45,20,112,1) 86%)"
      }}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full text-center">
        <img src={tinkerhub} alt="Tinkerhub" className="m-3 w-20 sm:w-40" />
      </div>
      
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-century-school-sb-bold text-6xl sm:text-6xl mt-20">
          D-Solve
        </h2>
        <h6 className="font-century-school-sb-bold text-0.06xl sm:text-0.2xl mt-0.2">
          LET'S SOLVE TOGETHER
        </h6>
        <h2 className="font-century-school-sb-bold text-3xl sm:text-6xl mt-20">
          Refreshment Break
        </h2>
        <h2 className="text-[76px] sm:text-[128px] md:text-[176px] lg:text-[256px] leading-tight">
          {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{" "}
          {timeLeft.seconds}
        </h2>
      </div>
    </div>
  );
}

export default Countdown;
