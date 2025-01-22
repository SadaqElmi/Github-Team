import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram, FaSkype, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto px-4">
        
        <div className="text-sm text-gray-600 mb-4">
        
          <span className="hover:text-gray-800 cursor-pointer font-semibold">Home</span> &gt;&gt; <span className="font-semibold">Contacts</span>
           
        </div>


        <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-80 p-5 shadow border rounded-2xl">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2  rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2  rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2  rounded-2xl focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Type your message"
                  className="w-full px-4 py-2  rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-1/2 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600  w-[100px] h-[-10px]"
              >
                SEND
              </button>
            </form>
          </div>

          <div className="p-8 rounded text-gray-600">
            <h2 className="text-2xl font-semibold mb-4">Info</h2>
            <p className="mb-4">
              We are always happy to help and provide more information about our
              services. You can contact us through email, phone, or by filling
              out the form on our website. Thank you for considering us!
            </p>
            <ul className="space-y-2">
              <li>6 766 4555</li>
              <li>support@waydex.com</li>
              <li>221B Baker St, Marylebone, London</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-500" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-500" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-500" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-500" aria-label="Telegram">
                <FaTelegram />
              </a>
              <a href="#" className="hover:text-gray-500" aria-label="Skype">
                <FaSkype />
              </a>
              <a href="#" className="hover:text-gray-500" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;