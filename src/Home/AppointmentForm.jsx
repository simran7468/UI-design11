import React from "react";

const AppointmentForm = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex flex-wrap lg:flex-nowrap items-center p-2 py-10 px-6">
      
      <div className="lg:w-1/2 w-full  p-6 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">
          Patholab is committed
          <br />
          <span className="text-5xl text-Didot 	">For accurate Findings</span>
        </h1>
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="space-y-4 mt-4">
          <div className="flex items-start space-x-4 animate-slide-left">
            <span className="bg-white text-teal-500 font-bold rounded-full w-8 h-8 flex justify-center items-center">
              1
            </span>
            <p>
              <strong>Experience And Expertise</strong>
              <br />
              Patholab Laboratory is a leading diagnostic laboratory established with a vision to provide complete laboratory services.
            </p>
          </div>
          <div className="flex items-start space-x-4 animate-slide-left">
            <span className="bg-white text-teal-500 font-bold rounded-full w-8 h-8 flex justify-center items-center">
              2
            </span>
            <p>
              <strong>Experience And Expertise</strong>
              <br />
              Patholab Laboratory is a leading diagnostic laboratory established with a vision to provide complete laboratory services.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full bg-white text-gray-800 p-4 rounded-xl shadow-lg animate-fade-in-up">
        <h2 className="  animate-fade-in-up font-bold mb-4 text-center text-color-blue opacity-70 text-sm">
          High Performance Services For
          </h2>
         <h1 className="animate-fade-in-up font-bold mb-4 text-2xl text-color-blue text-font  text-center font-serif"> Schedule An Appointment</h1>
        <p className="text-center animate-fade-in-up text-gray-500 mb-6">
          Patholab is the best diagnostic lab in the city. I have great
          experience with them. They provide authentic services.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Select Service*</label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select Service</option>
              <option value="blood-test">Blood Test</option>
              <option value="x-ray">X-Ray</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone No*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="text"
              placeholder="Location*"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="time"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <textarea
            placeholder="Special Requirement"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              required
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the Terms of Use and Privacy Policy
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 via-Emerald-200 to-green-400  text-white font-medium px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
          >
            Make Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
