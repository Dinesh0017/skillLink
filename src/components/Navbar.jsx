import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/assets/SkillLink-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 lg:px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="SkillLink" className="h-12" />
        </div>

        {/* Tablet & Desktop Menu */}
        <nav className="hidden sm:flex space-x-4 md:space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-700 transition-colors">
            For Businesses
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            Explore
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            Become a Pro
          </a>
        </nav>

        {/* Tablet & Desktop Auth/Search */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
          <button className="px-3 md:px-4 py-1 bg-green-700 text-white rounded hover:bg-green-800 transition cursor-pointer">
            Log in
          </button>
          <button className="px-3 md:px-4 py-1 border rounded text-green-700 hover:bg-green-50 transition cursor-pointer">
            Sign up
          </button>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white shadow-lg border-t animate-slideDown">
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block text-gray-700 font-medium hover:text-[#196C64]">
              For Businesses
            </a>
            <a href="#" className="block text-gray-700 font-medium hover:text-[#196C64]">
              Explore
            </a>
            <a href="#" className="block text-gray-700 font-medium hover:text-[#196C64]">
              Become a Pro
            </a>
            <div className="pt-4 border-t flex flex-col space-y-3">
              <button className="bg-[#196C64] ml-2 px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-green-800 transition-colors hover:shadow-lg">
                Log in
              </button>
              <button className="w-full bg-[#196C64] text-white rounded py-2 hover:bg-green-800 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
