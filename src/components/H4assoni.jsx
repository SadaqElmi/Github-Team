import React from "react";

const H4assoni = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 bg-white rounded-lg shadow-md">
      <div className="text-blue-600 text-2xl font-bold mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l5 5-5 5-5-5 5-5z" />
          <path d="M12 22l5-5-5-5-5 5 5 5z" />
        </svg>
        Workcation
      </div>
      <p className="text-gray-600 text-lg italic text-center max-w-2xl">
        “Workcation has transformed the way we work remotely. It offers a
        perfect blend of productivity and relaxation, making every work trip
        feel like a vacation. Highly recommended to anyone who values work-life
        balance!.”
      </p>
      <div className="flex items-center mt-6">
        <img
          src="https://i.pinimg.com/736x/2a/7d/4c/2a7d4c4bc1381a476b8b8a85885ac392.jpg"
          alt="Judith Black"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <p className="text-gray-800 font-semibold">Judith Black</p>
          <p className="text-gray-500 text-sm">CEO of Workcation</p>
        </div>
      </div>
    </div>
  );
};

export default H4assoni;
