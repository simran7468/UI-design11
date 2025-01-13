import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { obj } from './Nav2'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='  w-full flex flex-row justify-around  items-center '>
      <nav className=" items-center   space-around w-full  flex flex-row">
        <div className="  items-center  m-6">
          <img
            src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/logo.png"
            alt="Patholab Laboratory Logo"
            className='w-48'
          />
        </div>
        <div className=' flex-row space-x-3  hidden sm:flex sm:items-end ml-44  w-full   '>
          {obj.map((item, index) => (
            <div key={index} className=' w-30 items-center flex flex-row'>
              <div className='p-2 bg-white mr-1 rounded-full text-black'><FontAwesomeIcon icon={item.icon} />
              </div>
              <div className='w-full p-4  border-r-2'>
                <h3 className='  font-bold text-sm text-blue-900'>{item.contact}|</h3>
                <p className='text-gray-400 text-xs mt-2'>{item.info}|</p>
              </div>
            </div>
          ))
          }
          <div className='m-6'>
            <button className=' py-2 px-4  flex items-center text-white font-semibold rounded-full  bg-teal-500 transition-colors duration-300 '>
              Request Home Collection
            </button>

          </div>
        </div>

        <div className="block lg:hidden" onClick={toggleMenu}>
          <button className="text-2xl">
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </nav>

      {/* <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-blue-200 py-4`}>
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <a href="#home" className="hover:text-blue-500 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition duration-300">About</a>
          </li>
          <li>
            <a href="#contactUs" className="hover:text-blue-500 transition duration-300">Contact Us</a>
          </li>
          <li>
            <a href="#insurance" className="hover:text-blue-500 transition duration-300">Insurance</a>
          </li>
          <li>
            <a href="#testimonial" className="hover:text-blue-500 transition duration-300">Testimonial</a>
          </li>
        </ul>
      </div> */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-200 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl text-black"
          onClick={toggleMenu}
        >
          ✖
        </button>
        <ul className="flex flex-col items-start mt-16 ml-6 space-y-4">
          <li>
            <a href="#home" className="hover:text-blue-500 transition duration-300">
              Home
            </a>
          </li>
          <li><a href="#about" className="hover:text-blue-500 transition duration-300" >About </a></li>
          <li><a href="#contactUs" className="hover:text-blue-500 transition duration-300" > Contact Us</a> </li>
          <li>
            <a
              href="#insurance"
              className="hover:text-blue-500 transition duration-300"
            >
              Insurance
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="hover:text-blue-500 transition duration-300"
            >
              Testimonial
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}

    </div>
  );
};

export default Navbar;