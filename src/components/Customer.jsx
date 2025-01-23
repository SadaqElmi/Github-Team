import React from "react";
import Employe1 from "../assets/employee1.jpg";
import Employe2 from "../assets/employee2.jpg";
import Employe3 from "../assets/employee3.jpg";
import Employe4 from "../assets/employee4.jpg";
import EMP1 from "../assets/EMP1.jpg";
import EMP2 from "../assets/EMP2.jpg";
import EMP3 from "../assets/EMP3.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTelegram,
  FaTwitter,
  FaLinkedin,
  FaAngleDoubleRight,
  FaPaperPlane,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

function Customer() {
  const List = [
    { image1: Employe1, Title_1: "Chartity", Title_2: "CEO & Founder" },
    { image1: Employe2, Title_1: "Ray Gunn", Title_2: "COO" },
    { image1: Employe3, Title_1: "Mona Lott", Title_2: "Founder" },
    { image1: Employe4, Title_1: "Adam", Title_2: "Founder" },
  ];

  const list2 = [
    {
      tatle3:
        "I recently had an issue with a rental car, and the team at this rental service went above and beyond to help me out. They were responsive and understanding, and ultimately resolved my issue in a timely manner.",
      img1: EMP1,
      title4: "Tess Harper",
      title5: "Ha Noi, Vietnam",
    },
    {
      tatle3:
        "The cars available for rent at this service are always in great condition and well-maintained. The rental process is simple and straightforward, and I appreciate the competitive pricing.",
      img1: EMP2,
      title4: "Brian Cranston",
      title5: "Washington, USA",
    },
    {
      tatle3:
        "I had a great experience renting a car from this service. The process was seamless and efficient, and the staff was friendly and professional. The car was in excellent condition and I felt safe and secure driving it.",
      img1: EMP3,
      title4: "Matt Jones",
      title5: "Sydney, Australia",
    },
  ];

  return (
    <div className="p-10 bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="flex gap-4 items-center text-gray-600 mb-5">
        <li className="list-none hover:underline cursor-pointer">Home</li>
        <FaAngleDoubleRight className="text-gray-400 text-sm" />
        <li className="list-none hover:underline cursor-pointer">About Us</li>
      </div>

      {/* Title and Description */}
      <h1 className="pt-3 text-3xl font-bold text-gray-800">
        Waydex - Car Rental HTML Template
      </h1>
      <p className="text-lg text-gray-700 py-3 leading-7">
        Are you planning a trip but don't want to rely on public transport? Our
        car rental service is here to provide you with the perfect solution. We
        offer a wide range of vehicles to meet your every need, from economy to
        luxury models. With our simple online booking process, you can choose
        the car that suits you best and have it waiting for you when you arrive.
      </p>
      <p className="text-lg text-gray-700 leading-7">
        At our car rental service, we pride ourselves on providing excellent
        customer service. Our friendly and knowledgeable staff are always ready
        to assist you in choosing the right vehicle and answering any questions
        you may have. We also offer flexible rental periods and competitive
        pricing, so you can get the most out of your rental experience.
      </p>

      {/* Steps Section */}
      <div className="my-20 flex justify-center gap-8">
        <div className="w-[400px] shadow-md rounded-lg bg-white p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 text-4xl rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
              01
            </div>
            <p className="text-lg font-bold text-gray-800">Create Profile</p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Register on our platform to access a personalized car rental
            experience.
          </p>
        </div>

        <div className="w-[400px] shadow-md rounded-lg bg-white p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 text-4xl rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
              02
            </div>
            <p className="text-lg font-bold text-gray-800">Match With Seller</p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Our algorithm will match you with the best available car rental
            options.
          </p>
        </div>

        <div className="w-[400px] shadow-md rounded-lg bg-white p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 text-4xl rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
              03
            </div>
            <p className="text-lg font-bold text-gray-800">Make a Deal</p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Finalize the rental agreement with the car owner and enjoy your
            hassle-free ride.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Team Members</h1>
      <p className="text-lg text-gray-700 leading-7 mb-6">
        From experienced car rental agents to skilled mechanics, our team is
        committed to providing you with the best car rental experience possible.
        We value transparency and trust, which is why we have posted photos and
        brief biographies of our team members on this page. We strive to provide
        our customers with the highest level of service.
      </p>

      {/* Team Member Card */}
      <div className="flex justify-center gap-8 flex-wrap">
        {List.map((list, index) => (
          <div
            key={index}
            className="w-[300px] shadow-lg rounded-lg bg-white p-5 hover:shadow-xl transition-shadow"
          >
            <img
              src={list.image1}
              alt={list.Title_1}
              className="w-full h-[200px] object-cover rounded-xl mb-4"
            />
            <p className="text-lg font-bold text-gray-800 ">{list.Title_1}</p>
            <p className="text-sm text-gray-600 ">{list.Title_2}</p>
            <div className="flex gap-3 mt-3">
              <FaFacebook className="text-blue-500 text-lg cursor-pointer hover:scale-110 transition-transform" />
              <FaInstagram className="text-pink-500 text-lg cursor-pointer hover:scale-110 transition-transform" />
              <FaSkype className="text-blue-400 text-lg cursor-pointer hover:scale-110 transition-transform" />
              <FaPaperPlane className="text-gray-500 text-lg cursor-pointer hover:scale-110 transition-transform" />
              <FaLinkedin className="text-blue-700 text-lg cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Customer Reviews */}
      <div className="p-3 my-16">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Customer Reviews</h1>
          <div className="flex gap-2">
            <FaArrowLeft className="bg-white shadow-md text-2xl p-1 rounded-full cursor-pointer hover:shadow-lg transition-shadow" />
            <FaArrowRight className="bg-white shadow-md text-2xl p-1 rounded-full cursor-pointer hover:shadow-lg transition-shadow" />
          </div>
        </div>

        <div className="flex gap-8 flex-wrap">
          {list2.map((review, index) => (
            <div
              key={index}
              className="w-[400px] bg-gray-100 rounded-lg shadow-md p-6 flex flex-col gap-4"
            >
              <p className="text-gray-700 italic">{`«${review.tatle3}»`}</p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={review.img1}
                  alt={review.title4}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-gray-800">
                    {review.title4}
                  </p>
                  <p className="text-sm text-gray-600">{review.title5}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customer;
