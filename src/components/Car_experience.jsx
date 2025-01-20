import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 56,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div
          key={key}
          className="flex flex-col items-center bg-white p-6 rounded-full shadow">
          <div className="text-2xl font-bold text-gray-800">{value}</div>
          <div className="text-sm text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
        </div>
      ))}
    </div>
  );
};

const CarExperience = () => {
  return (
    <div className="bg-gray-50 min-h-medium flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2">
            {/* Icon */}
            <FaCar className="text-pink-800 text-lg" />
            <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-900 text-sm font-medium">
              QuickMeet
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Enhance Your Car Experience
          </h1>
          <CountdownTimer />
          <button className="px-12 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Check it Out!
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <img
            src="/Images/car.png"
            alt="Premium Car"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default CarExperience;
