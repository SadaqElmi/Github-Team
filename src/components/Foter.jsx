import React from 'react';

const Foter = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="container mx-auto px-9 py-[80px] relative  ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Waydex</h3>
            <p className="text-sm mb-4">
              Search for cheap rental cars in New York. With a diverse fleet
              of 19,000 vehicles, Waydex offers its consumers an attractive
              and fun selection.
            </p>
            <div className="flex items-center">
            <img
                src="data:image/png;base64,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"
              
                alt="UK Flag"
                className="inline w-5 h-5 mr-2"
              />
              <select
                className="bg-transparent text-sm rounded px-2 py-1 focus:outline-none "
              >
                <option>English</option>
              </select>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Neighborhoods in New York</h4>
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
            <h4 className="text-sm font-semibold mb-4 ">Support</h4>
            <ul className="text-sm space-y-2">
              <li>Help center</li>
              <li>Ask a question</li>
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 flex justify-between items-center text-sm bg-white text-gray-700 px-6 py-3 rounded-xl shadow-md border-7 border-gray-200 w-[1200px] absolute bottom-[-13px]  ">
          <p className="text-gray-700">
            &copy; Waydex, 2022—2023. Created by Dmitry Volkov.
          </p>

          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-gray-500" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="X (Twitter)">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="Skype">
              <i className="fab fa-skype"></i>
            </a>
            <a href="#" className="hover:text-gray-500" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foter;