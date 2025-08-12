import { useState } from "react";
import { logo } from "../assets";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="TechMint" className="h-16" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Services
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#portfolio" className="hover:text-blue-500 transition">
            Portfolio
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Videos
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact Us
          </a>
          <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition">
            Contact Us Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-25 left-0 w-full bg-gray-100 shadow-md flex flex-col p-4 gap-4 text-center transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      >
        <a href="#">Home</a>
        <hr className="text-gray-200" />
        <a href="#">Services</a>
        <hr className="text-gray-200" />
        <a href="#">About</a>
        <hr className="text-gray-200" />
        <a href="#portfolio">Portfolio</a>
        <hr className="text-gray-200" />
        <a href="#">Videos</a>
        <hr className="text-gray-200" />
        <a href="#">Contact Us</a>
      </div>
    </header>
  );
};

export default Navbar;
