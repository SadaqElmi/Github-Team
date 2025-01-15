import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around items-center py-2">
        <div className="">
          <img className="h-16" src="../../public/Images/Logo.png" alt="logo" />
        </div>
        <ul className="flex justify-between items-center gap-10">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white">
              About
            </Link>
          </li>
        </ul>
        <button className="text-white border-2 py-2 px-4 rounded-sm">
          Jion Us
        </button>
      </nav>
    </div>
  );
};

export default Header;
