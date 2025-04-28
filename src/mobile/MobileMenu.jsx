import React from "react";
import { IoIosClose } from "react-icons/io";

const MobileMenu = ({ navLinks, isMenuOpen, SetIsMenuOpen }) => {
  return (
    <div>
      {/* Dark Background Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-70 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "visible opacity-70" : "invisible opacity-0"
        }`}
        onClick={() => SetIsMenuOpen(false)} // Close menu when clicking on the overlay
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 flex flex-col top-0 left-0 h-full w-52 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-3">
          <IoIosClose
            size="40"
            className="text-darkGrayishBlue"
            onClick={() => SetIsMenuOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-4 p-5">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              className="text-black text-lg font-bold"
              key={index}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
