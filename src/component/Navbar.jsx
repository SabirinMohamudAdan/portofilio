import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; // Icons for menu and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state
  };

  return (
    <nav className="bg-gray-900 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#" className="hover:text-yellow-500"><span className='
          text-yellow-500'>Sabirin</span>Mohamud.</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-xl ">
          <a href="#home" className="text-yellow-500   hover:underline ">Home</a>
          <a href="#about" className="text-white hover:text-yellow-500  hover:underline">About</a>
          <a href="#service" className="text-white hover:text-yellow-500 hover:underline">Service</a>
          <a href="#contact" className="text-white hover:text-yellow-500 hover:underline">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-yellow-500 focus:outline-none">
            {isOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu3Line className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900 mt-4 text-xl  `}>
        <a href="#about" className="block text-white hover:text-yellow-500 p-2  ">Home</a>
        <a href="#home" className="block text-white hover:text-yellow-500 p-2">About</a>
        <a href="#service" className="block text-white hover:text-yellow-500 p-2">Service</a>
        <a href="#contact" className="block text-white hover:text-yellow-500 p-2">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;