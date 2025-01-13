import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Card2() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="group">
      <div className="absolute bg-white text-teal-500 rounded-lg p-8 text-center max-w-xs transition-all duration-1000 ">
        <div className="mb-4">
          <i className="fas fa-microscope text-6xl"></i>
        </div>
        <h2 className="text-2xl font-bold mb-4 ">Vaccine Research Center</h2>
        <p className="mb-4 ">Lab testing can be a very effective way to understand what’s happening...</p>
        <a href="#" className="font-bold hover:underline">
          READ MORE <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      <div className="absolute bg-white text-teal-500 rounded-lg p-8 text-center max-w-xs transition-all duration-200 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-teal-500 group-hover:text-white group-hover:shadow-lg">
        <div className="mb-4">
         
        </div>
        <h2 className="text-2xl font-bold mb-4 transform-none">Vaccine Research Center</h2>
        <p className="mb-4 ">Lab testing can be a very effective way to understand what’s happening...</p>
        <a href="#" className="font-bold hover:underline ">
          READ MORE <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      </div>
      
      
    </div>
  );
}

export default Card2;
