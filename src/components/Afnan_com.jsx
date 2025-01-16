import React from "react";

const Afnan = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Best Deal Car */}
        <div className="bg-gray-50 rounded-lg p-8 flex items-center">
          <div className="w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">BEST DEAL</h2>
            <p className="text-gray-600">
              Discover the best deal of the season with our exclusive offers. 
            </p>
            <p className="text-gray-600">
              Don't miss out on driving away in your dream car!
            </p>
          </div>
          <div className="w-1/2 relative">
            <img
              src="/Images/my_car1.png"
              alt="white car tracking features"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
        {/* New Arrival Car */}
        <div className="bg-gray-50 rounded-lg p-8 flex items-center">
          <div className="w-1/2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">NEW ARRIVAL</h2>
            <p className="text-gray-600">
              Check out the latest addition to our collection
            </p>
            <p> it's the perfect choice for anyone looking for both style and substance.</p>

          </div>
          <div className="w-1/2 relative">
            <img
              src="/Images/my_car2.png"
              alt="Black Car"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Afnan;