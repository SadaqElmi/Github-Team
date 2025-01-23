import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa";

const CarExperience = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 56,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        if (minutes > 0)
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };

        clearInterval(timer);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }; 
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const handleButtonClick = () => {
    alert("Thank you!");
  };

  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <div className="bg-gray-200 rounded-lg shadow-lg p-4 md:p-12 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left QuickMeet Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            {/* Icon and QuickMeet Label */}
            <div className="flex items-center space-x-2">
              <FaCar className="text-pink-500 text-2xl" />
              <p className="text-sm font-bold text-pink-500">QuickMeet</p>
            </div>
            {/* Main Text */}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              Enhance Your <br /> Car Experience
            </h1>
            {/* Countdown Numbers */}
            <div className="flex space-x-4 justify-center">
              <div className="flex flex-col items-center bg-gray-100 rounded-full p-4 w-24 h-24 shadow-md">
                <p className="text-3xl font-bold text-gray-800">{timeLeft.days}</p>
                <p className="text-sm text-gray-600">Day</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 rounded-full p-4 w-24 h-24 shadow-md">
                <p className="text-3xl font-bold text-gray-800">{timeLeft.hours}</p>
                <p className="text-sm text-gray-600">Hr</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 rounded-full p-4 w-24 h-24 shadow-md">
                <p className="text-3xl font-bold text-gray-800">{timeLeft.minutes}</p>
                <p className="text-sm text-gray-600">Min</p>
              </div>
              <div className="flex flex-col items-center bg-gray-100 rounded-full p-4 w-24 h-24 shadow-md">
                <p className="text-3xl font-bold text-gray-800">{timeLeft.seconds}</p>
                <p className="text-sm text-gray-600">Sec</p>
              </div>
            </div>
            {/* Button */}
            <button
              className="mt-6 w-60 h-16 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-blue-600 flex items-center justify-center"
              onClick={handleButtonClick}
            >
              Check it Out!
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full max-w-md">
            <img
              src="Images/car_e.png"
              alt="Cars"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarExperience;
