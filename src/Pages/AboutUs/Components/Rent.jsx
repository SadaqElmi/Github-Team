import React from "react";
import {
  FaUserPlus,
  FaCar,
  FaUserCheck,
  FaFileSignature,
} from "react-icons/fa";

function Rent() {
  return (
    <div className="pl-8 pt-6 ">
      <h1 className="text-3xl ">our reasons to rent a car in Wa</h1>
      <p className="py-4">
        Looking for a reliable car rental? Look no further! Our company offers
        affordable prices, full insurance coverage, and <br /> support on the
        road. With minimum bureaucracy, you can- getc on the road hassle-free.
      </p>

      {/* section 2 */}
      <div className="sm:flex justify-center gap-10 h-[400px] mt-20">
        {/* Info Box 1 */}
        <div className="sm:w-[300px] sm:h-[230px] pl-4 pt-2 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
          <div className="">
            <div className="flex gap-2">
              <FaUserPlus className="text-pink-700 bg-pink-200 p-2 rounded-xl text-3xl mt-4" />
              <h1 className="py-4 text-lg font-semibold text-gray-800">
                Support on the Road
              </h1>
            </div>
            <p className="text-gray-600">
              We've got you covered with 24/7 support on the road. No matter
              where you are, we'll be there to help you out.
            </p>
          </div>
        </div>

        {/* Info Box 2 */}

        <div className="sm:w-[300px] sm:h-[230px] pl-4 pt-2 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
          <div className="">
            <div className="flex gap-2">
              <FaUserPlus className="text-pink-700 bg-pink-200 p-2 rounded-xl text-3xl mt-4" />
              <h1 className="py-4 text-lg font-semibold text-gray-800">
                Affordable price
              </h1>
            </div>
            <p className="text-gray-600">
              Our prices are competitive and affordable. We strive to provide
              the best value for your money.
            </p>
          </div>
        </div>

        {/* Info Box 3 */}

        <div className="sm:w-[300px] sm:h-[230px] pl-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
          <div className="">
            <div className="flex gap-2">
              <FaFileSignature className="text-purple-500 bg-purple-200 p-2 rounded-xl text-3xl mt-7" />
              <h1 className="py-4 text-lg font-semibold text-gray-800">
                Minimum of <br /> Bureacurcy
              </h1>
            </div>
            <p className="text-gray-600">
              We know your time is valuable. That's why we've simplified the
              rental process and eliminated unnecessary bureaucracy
            </p>
          </div>
        </div>

        {/* Info Box 4 */}

        <div className="sm:w-[300px] sm:h-[230px] pl-4 pt-2 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
          <div className="">
            <div className="flex gap-2">
              <FaUserPlus className="text-pink-700 bg-pink-200 p-2 rounded-xl text-3xl mt-4" />
              <h1 className="py-4 text-lg font-semibold text-gray-800">
                Full Insurance
              </h1>
            </div>
            <p className="text-gray-600">
              Drive with peace of mind knowing that our rental cars come with
              full insurance coverage. You are safe with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
