import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-100 py-4 px-6">
      <nav className="text-sm text-gray-500">
        <Link to="/" className="hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2">{">>"}</span>
        <span className="text-gray-900 font-semibold">
          Frequently Asked Questions
        </span>
      </nav>
    </div>
  );
};

export default Header;
