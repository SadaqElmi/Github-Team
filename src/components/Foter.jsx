import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaSkype,
  FaEnvelope,
} from "react-icons/fa";

const Foter = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-20">
      <div className="container mx-auto px-9 flex flex-col justify-between gap-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          <div>
            <h3 className="text-lg font-semibold mb-4">Waydex</h3>
            <p className="text-sm mb-4">
              Search for cheap rental cars in New York. With a diverse fleet of
              19,000 vehicles, Waydex offers its consumers an attractive and fun
              selection.
            </p>
            <div className="flex items-center justify-start">
              <img
                src="/src/assets/uk.png"
                alt="UK Flag"
                className="inline w-7 h-5 mr-2 object-cover rounded-[6px]"
              />
              <select className="bg-transparent text-sm rounded px-2 py-1 focus:outline-none">
                <option>English</option>
              </select>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">
              Neighborhoods in New York
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-sm space-y-2">
                <li>Manhattan</li>
                <li>Central New York City</li>
                <li>Upper East Side</li>
                <li>Queens</li>
              </ul>
              <ul className="text-sm space-y-2">
                <li>Theater District</li>
                <li>Midtown</li>
                <li>SoHo</li>
                <li>Chelsea</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-sm-4 font-semibold mb-4">Company</h4>
            <ul className="text-sm space-y-2">
              <li>About us</li>
              <li>Pricing plans</li>
              <li>Our blog</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="text-sm space-y-2">
              <li>Help center</li>
              <li>Ask a question</li>
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
        </div>

        <div className=" pt-4 flex justify-between items-center text-sm bg-white text-gray-700 px-6 py-3 rounded-xl shadow-md border-7 border-gray-200 w-[1200px] h-[80px] ">
          <p className="text-gray-700">
            &copy; Waydex, 2022—2023. Created by Dmitry Volkov.
          </p>

          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-gray-500" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-gray-500"
              aria-label="X (Twitter)"
            >
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
    </footer>
  );
};

export default Foter;
