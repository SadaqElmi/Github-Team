import React from "react";

export default function PricingPlans() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home &raquo; <span className="text-blue-600">Pricing plans</span>
        </div>

        {/* Title and Description */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing plans</h1>
          <p className="text-gray-600 text-lg mb-10">
            Are you planning a trip but don't want to rely on public transport? Our{" "}
            <a href="#" className="text-blue-600 underline">
              car rental service
            </a>{" "}
            is here to provide you with the perfect solution. We offer a wide range of vehicles to meet your every need,
            from economy to luxury models. With our simple online booking process, you can choose the car that suits you
            best and have it waiting for you when you arrive.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            {
              icon: "🌐",
              title: "Support on the road",
              description:
                "We've got you covered with 24/7 support on the road. No matter where you are, we'll be there to help you out.",
            },
            {
              icon: "💵",
              title: "Affordable prices",
              description:
                "Our prices are competitive and affordable. We strive to provide the best value for your money.",
            },
            {
              icon: "📄",
              title: "Minimum of bureaucracy",
              description:
                "We know your time is valuable. That's why we've simplified the rental process and eliminated unnecessary bureaucracy.",
            },
            {
              icon: "🛡️",
              title: "Full insurance",
              description:
                "Drive with peace of mind knowing that our rental cars come with full insurance coverage. You are safe with us.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div>
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">Select your plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic plan",
                price: "$289 / month",
                features: [
                  { text: "Search all listings", available: true },
                  { text: "Create wishlist", available: true },
                  { text: "See seller contact", available: false },
                  { text: "Full listing info", available: false },
                ],
              },
              {
                title: "Regular",
                price: "$389 / month",
                features: [
                  { text: "Search all listings", available: true },
                  { text: "Create wishlist", available: true },
                  { text: "See seller contact", available: true },
                  { text: "Full listing info", available: false },
                ],
              },
              {
                title: "Premium",
                price: "$489 / month",
                features: [
                  { text: "Search all listings", available: true },
                  { text: "Create wishlist", available: true },
                  { text: "See seller contact", available: true },
                  { text: "Full listing info", available: true },
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold text-gray-800 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-center ${
                        feature.available ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <span className="mr-2">
                        {feature.available ? "✔️" : "❌"}
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md w-full">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
