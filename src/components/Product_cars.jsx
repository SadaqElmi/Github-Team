import React from "react";
import car2 from "../assets/car2.png";
import Red from "../assets/Red.png";
import { FaPaperPlane, FaUndo, FaWallet, FaHeadphones } from "react-icons/fa";

function Product_cars() {
  return (
    <div className="h-screen bg-gray-50">
      {/* Main Cards Section */}
      <div className="flex justify-center gap-8 pt-10">
        {/* Card 1 */}
        <div className="w-[40%] h-[300px] rounded-xl bg-gradient-to-r from-black via-gray-800 to-gray-700 relative shadow-lg">
          <img
            src={car2}
            alt="Car"
            className="w-[300px] h-full object-cover absolute right-0 rounded-r-2xl shadow-md"
          />
          <div className="pl-7 pt-10 w-60">
            <h1 className="text-center pb-2 text-lg text-gray-400 tracking-wide">
              New Arrivals
            </h1>
            <h1 className="text-white text-3xl text-center pb-6 font-bold tracking-wider">
              WHEELS & <br /> DISK
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-xl py-2 px-6 rounded-md ml-8 font-semibold text-white shadow-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[40%] h-[300px] rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-red-400 relative shadow-lg">
          <img
            src={Red}
            alt="Red Car"
            className="w-[400px] h-full object-cover absolute right-0 rounded-r-2xl shadow-md"
          />
          <div className="pl-7 pt-10 w-60">
            <h1 className="text-center pb-3 pt-2 text-lg text-gray-200 tracking-wide">
              Big Saving
            </h1>
            <h1 className="text-white text-3xl text-center pb-10 font-bold tracking-wider">
              SAVE 30% OFF
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-xl py-2 px-6 rounded-md ml-8 font-semibold text-white shadow-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-blue-500 h-[200px] w-[81%] ml-[9.5%] rounded-md mt-10 flex justify-center gap-10 items-center py-8 shadow-md">
        {/* Info Box 1 */}
        <div className="flex items-center gap-4 text-white">
          <FaPaperPlane className="text-4xl" />
          <div>
            <h1 className="text-lg font-semibold">Worldwide Shipping</h1>
            <p className="text-sm text-gray-200">Order above $100</p>
          </div>
        </div>

        {/* Info Box 2 */}
        <div className="flex items-center gap-4 text-white">
          <FaUndo className="text-4xl" />
          <div>
            <h1 className="text-lg font-semibold">Easy 30 Days Returns</h1>
            <p className="text-sm text-gray-200">Back return in 7 days</p>
          </div>
        </div>

        {/* Info Box 3 */}
        <div className="flex items-center gap-4 text-white">
          <FaWallet className="text-4xl" />
          <div>
            <h1 className="text-lg font-semibold">Money Back Guarantee</h1>
            <p className="text-sm text-gray-200">Guarantee within 30 days</p>
          </div>
        </div>

        {/* Info Box 4 */}
        <div className="flex items-center gap-4 text-white">
          <FaHeadphones className="text-4xl" />
          <div>
            <h1 className="text-lg font-semibold">Easy Online Support</h1>
            <p className="text-sm text-gray-200">Any time support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_cars;
