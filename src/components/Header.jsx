
import { Link } from "react-router-dom";
// import carImage from "../HeroSection/img/carimgae.jpeg";

const Header = () => {
  return (
    <nav className="flex justify-around items-center py-2 z-10 relative bg-transparent">
      <div className="">
        <img className="h-16" src="Images/Logo.png" alt="logo" />
      </div>
      <ul className="flex justify-between items-center gap-10">
        <li>
          <Link to="/" className="text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-black">
            Products
          </Link>
        </li>
        <li>
          <Link to="/" className="text-black">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/" className="text-black">
            About
          </Link>
        </li>
      </ul>
      <button className="text-black border-2 py-2 px-4 rounded-sm">
        Join Us
      </button>
    </nav>
  );
};

export default Header;