import { useState } from "react";
import { Menu, X } from "lucide-react"; // For a nice icon toggle
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="p-4 font-primary bg-white border-b border-gray-200">
      <nav className="flex justify-between items-center w-3/4 mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          BitNBoard
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
      className={`flex flex-col sm:flex-row absolute sm:static top-16 sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent transition-transform ${
        menuOpen ? 'block' : 'hidden sm:flex'
      } sm:justify-center`}
    >
      <Link
        to="/"
        className={`block sm:inline-block relative px-2 py-2 sm:py-0 text-lg font-medium sm:mx-4 group ${
          location.pathname === '/' ? 'text-black' : 'text-gray-600'
        }`}
      >
        Home
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${
            location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </Link>

      <Link
        to="/about"
        className={`block sm:inline-block relative px-2 py-2 sm:py-0 text-lg font-medium sm:mx-4 group ${
          location.pathname === '/about' ? 'text-black' : 'text-gray-600'
        }`}
      >
        About
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${
            location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </Link>

      <Link
        to="/swags"
        className={`block sm:inline-block relative px-2 py-2 sm:py-0 text-lg font-medium sm:mx-4 group ${
          location.pathname === '/swags' ? 'text-black' : 'text-gray-600'
        }`}
      >
        Swags
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${
            location.pathname === '/swags' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </Link>

      <Link
        to="/contact-us"
        className={`block sm:inline-block relative px-2 py-2 sm:py-0 text-lg font-medium sm:mx-4 group ${
          location.pathname === '/contact-us' ? 'text-black' : 'text-gray-600'
        }`}
      >
        Get in Touch
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${
            location.pathname === '/contact-us' ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        ></span>
      </Link>
    </div>
      </nav>
    </header>
  );
};

export default Header;
