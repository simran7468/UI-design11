import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function HeaderMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className=" border-t-2 bg-teal-400 shadow-md py-4">
        <div className="mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <img
              src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/logo.png"
              alt="Patholab Laboratory Logo"
              className="h-10"
            />
          </div>

          
          <button
            className="lg:hidden text-blue-900 text-2xl"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>

         
          <nav className="hidden lg:flex items-center space-x-6">
          
            {["Home", "Pages", "Services", "Cases", "Packages", "Blog"].map(
              (item, index) => (
                <div className="relative group" key={index}>
                  <a
                    href="#"
                    className="text-blue-900 font-medium hover:text-teal-500"
                  >
                    {item}{" "}
                    <span className="transform rotate-180 group-hover:rotate-0 inline-block">
                      ^
                    </span>
                  </a>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 w-48 py-2 z-50">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                    >
                      Submenu 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                    >
                      Submenu 2
                    </a>
                  </div>
                </div>
              )
            )}
          </nav>

         
          {menuOpen && (
            <nav className="lg:hidden mt-48 md:mt-40 sm:mt-40 absolute top-16 left-0 w-full bg-white shadow-md py-4 z-50">
              {["Home", "Pages", "Services", "Cases", "Packages", "Blog"].map(
                (item, index) => (
                  <div className="relative group px-4 py-2" key={index}>
                    <a
                      href="#"
                      className="text-blue-900 font-medium hover:text-teal-500 block"
                    >
                      {item}
                    </a>
                  </div>
                )
              )}
            </nav>
          )}

          <div className="hidden lg:flex items-center space-x-4">
           
            {[faFacebook, faTwitter, faInstagram, faPinterest].map(
              (icon, index) => (
                <div
                  key={index}
                  className="bg-gray-100 w-10 h-10 flex justify-center rounded-full"
                >
                  <span className="text-blue-900 self-center">
                    <FontAwesomeIcon icon={icon} />
                  </span>
                </div>
              )
            )}
            
            <div className="ml-4">
              <button className="bg-gradient-to-r from-teal-400 to-green-400 hover:bg-gradient-to-l hover:from-teal-400 hover:to-green-500 text-white font-medium py-2 px-4 rounded-full flex items-center">
                <FontAwesomeIcon icon={faCalendar} className="mr-2" /> Make
                Appointment
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderMain;
