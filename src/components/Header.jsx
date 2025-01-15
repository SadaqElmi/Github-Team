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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
        <button className="">Jion Us</button>
      </nav>
    </div>
  );
};

export default Header;
