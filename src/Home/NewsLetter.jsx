import React, { useState } from "react";
import newsletter from '../assets/HomeImages/newsletter.png'

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert(setMessage("Please enter a valid email address."));
      return;
    }

    // Simulate sending email to the backend
    console.log(`Subscribed email: ${email}`);
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className=" container  md:items-center  mx-auto sm:grid-cols-2 md:grid-cols grid flex-row justify-between bg-color-sky p-6 rounded-lg shadow-md">
      <div className="grid lg:flex lg:items-center lg:justify-between grid-cols-1 sm:grid-cols-2 gap-4 p-4  items-start">
        <img src={newsletter} alt="" className="bg-color-sky md:w-auto md:items-center lg:w-auto" />
        <div className="text-white text-3xl font-serif  mr-36 space-y-2">
          <p>For Latest Updates Subscribe </p>
          <p>To Our Newsletter</p>
        </div>
      </div>

      <div className="w-full sm:w-[400px] bg-color-sky mx-auto rounded-xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:bg-[#69DFD3] sm:rounded-full">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleInputChange}
            className="px-4 py-3 outline-none bg-[#69DFD3] sm:bg-transparent sm:w-full rounded-full text-white placeholder-white"
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-bold text-color-sky px-6 py-3 rounded-full sm:static sm:w-full"
          >
            Subscribe
          </button>
        </div>
        {message && (
          <p
            className={`mt-4 text-sm ${message === alert("Thank you for subscribing!") ? "text-green-500" : "text-red-500"}`}
          >
            {/* {message} */}
          </p>
        )}
      </div>



    </div>
  );
}

export default Newsletter;
