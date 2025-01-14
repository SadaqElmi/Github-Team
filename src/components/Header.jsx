import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around items-center py-2">
        <div className="">
          <img className="h-16" src="../../public/Images/Logo.png" alt="logo" />
        </div>
        <ul className="flex justify-between items-center gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <button className="">Jion Us</button>
      </nav>
    </div>
  );
};

export default Header;
