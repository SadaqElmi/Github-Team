import React from "react";

const features = [
  {
    icon: "📅",
    title: "Easy Online Booking",
    description: "Book quickly and easily through our user-friendly platform.",
  },
  {
    icon: "👨‍✈️",
    title: "Professional Drivers",
    description: "Our drivers are experienced and provide excellent service.",
  },
  {
    icon: "🚗",
    title: "Variety of Car Brands",
    description: "Choose from a wide selection of premium cars to suit your needs.",
  },
  {
    icon: "💳",
    title: "Online Payment grey",
    description: "Enjoy secure and seamless online payment options.",
  },
];

const Saphaa = () => {
  return (
    <div className="50 py-12 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h1>
        <p className="text-gray-400 mb-8">
          Explore our first-class limousine & car rental services
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" rounded-lg p-6 w-64 text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saphaa;
