import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // install react-icons if needed

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-indigo-100">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-5 py-3">
        <span className="font-bold text-lg tracking-tight hover:text-purple-500 transition-colors duration-200 cursor-pointer  select-none">
          Mytri Aryani
        </span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <a
                href={`#${to}`}
                className="relative pb-1 hover:text-indigo-600 transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-indigo-700 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-indigo-100 px-5 py-3 space-y-4 shadow-sm">
          {navLinks.map(({ label, to }) => (
            <a
              key={to}
              href={`#${to}`}
              onClick={closeMenu}
              className="block text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
