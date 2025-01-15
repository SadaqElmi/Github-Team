import React from "react";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user4 from "../assets/user3.jpg";

function Mohamed() {
  return (
    <div className="sm:flex justify-center gap-8 sm:px-20 sm:p-0 p-4 ">
      <div className="sm:w-[550px]">
        <div className="flex gap-14 mt-8  ">
          <p>Mar 16, 2020</p>
          <p>Marketing</p>
        </div>
        <h1 className="text-2xl  font-semibold text-gray-600 pt-4">
          Boost Your conversion rate
        </h1>
        <p className="text-xl text-gray-500 pt-4">
          Illo sint voluptas. Error voluptates culpa eligendi. Hic <br /> vel
          totam vitae illo. Non aliquid explicabo <br /> necessitatibus unde,
          Sed exercitationem placeat...
        </p>
        <div className="flex gap-2  pt-6">
          <img className="w-16 h-16 rounded-full" src={user1} alt="" />
          <div className="pt-2">
            <p className="font-bold">Michael Faster</p>
            <p className="text-gray-800 font-serif ">Co-Founder / CTO</p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="sm:w-[550px]">
        <div className="flex gap-14 mt-8  ">
          <p>Fab 12, 2020</p>
          <p>Business</p>
        </div>
        <h1 className="text-2xl  font-semibold text-gray-600 pt-4">
          How to use search engine optimization to drive sale
        </h1>
        <p className="text-xl text-gray-500 pt-4">
          Optio cum necessitatibus dolor voluptatum provident commodi et. Qui
          aperiam fugiat nemo cumque.
        </p>
        <div className="flex gap-2  pt-6">
          <img className="w-16 h-16 rounded-full" src={user2} alt="" />
          <div className="pt-2">
            <p className="font-bold">Lindsay Walton</p>
            <p className="text-gray-800 font-serif ">Front-end Developer</p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="sm:w-[550px]">
        <div className="flex gap-14 mt-8  ">
          <p>Feb 12, 2020</p>
          <p>Business</p>
        </div>
        <h1 className="text-2xl  font-semibold text-gray-600 pt-4">
          Improve your customer experience
        </h1>
        <p className="text-xl text-gray-500 pt-4">
          Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus.
          Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt
          aliqua. Nulla eu...
        </p>
        <div className="flex gap-2  pt-6">
          <img className="w-16 h-16 rounded-full" src={user4} alt="" />
          <div className="pt-2">
            <p className="font-bold">Tom Cook</p>
            <p className="text-gray-800 font-serif ">Director of Product</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mohamed;
