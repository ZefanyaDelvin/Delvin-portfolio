import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path) =>
    location.pathname === path ? "text-white" : "text-gray-400";

  return (
    <nav className="bg-black text-white px-6 py-6 shadow-md relative z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">Zefanya Delvin</div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Links for medium and up */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <Link to="/" className={`text-xl transition ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`text-xl transition ${isActive("/portfolio")}`}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu: smooth dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 text-sm">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`text-xl transition ${isActive("/")}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              onClick={() => setMenuOpen(false)}
              className={`text-xl transition ${isActive("/portfolio")}`}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
