import React from "react";
import { RiAddBoxFill } from "react-icons/ri";

const Helper = () => {
  const faqs = [
    { question: "How old do you have to be to rent a car?" },
    { question: "What’s required when renting a car?" },
    { question: "Can I rent a car without a credit card?" },
    { question: "What is an International Driving Permit and do I need one?" },
    { question: "How do insurance coverages work for rental cars?" },
    { question: "What are the limits for excess insurance?" },
    { question: "What’s included in the rental fee?" },
    { question: "What should I do in case of extra charges?" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl text-gray-600 mb-4">Help Center</h1>
      <p className="text-gray-600 mb-6">
        Here you will find answers to frequently asked questions about our
        company and services. If you don’t find the answer to your question,
        please contact our customer support and we’ll be happy to assist you.
        <span className="text-blue-500 hover:underline cursor-pointer">
          {" "}
          Ask a question.
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">{faq.question}</span>
              <RiAddBoxFill className="text-blue-500 text-2xl cursor-pointer " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Helper;
