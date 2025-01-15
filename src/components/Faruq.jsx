import React from "react";

import Car from "../assets/blue.jpg";
import GreyCar from "../assets/grey.jpg";
import YellowCar from "../assets/yellow.jpg";
import WhiteCar from "../assets/white.jpg";

const Faruq = () => {
  const products = [
    { name: "Lamborghini", price: 55000, color: "Blue", image: Car },
    { name: "Lamborghini", price: 35000, color: "Grey", image: GreyCar },
    { name: "Lamborghini", price: 65000, color: "Yellow", image: YellowCar },
    { name: "Lamborghini", price: 325000, color: "White", image: WhiteCar },
  ];



  return (
    <div className="font-sans p-6 bg-gradient-to-b   min-h-screen">
      <h1 className="text-left text-4xl font-bold mb-8 text-gray-900">
        Customers also purchased
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <p className="text-lg font-bold text-gray-900">${product.price}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Color: {product.color}</p>
                <button
                  onClick={() => handleAddToCart(product.name)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faruq;
