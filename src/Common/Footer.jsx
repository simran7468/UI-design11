import { faFacebook, faGoogle, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className=' text-white relative  '>
      <div className='flex  justify-center absolute -top-16 left-44'>
        {/* <div class="flex bg-gradient-to-r from-teal-400 to-green-300 p-6 w-[70vw] rounded-3xl  self-center">
          <h2 class="text-2xl font-bold flex-1">
            For Latest Updates Subscribe To Our Newsletter
          </h2>
          <div class="mt-4 mb-8 flex justify-center relative flex-1">
            <input class="p-2 rounded-full h-11 bg-transparent shadow-lg w-[25vw] absolute outline-none placeholder-white text-white" placeholder="Enter Your Email" type="email" />
            <button class="bg-white text-teal-500 font-semibold p-2 px-6 rounded-full absolute right-[12%]">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
      <footer class="p-2  bg-blue-900 h-[38vw]">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-7 mt- ml-6 ">
          <div>
            <img alt="Patholab logo" class="mb-4" height="100" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/logo-light.png" width="100" />
            <p>
              Patholab laboratory is a very well equipped laboratory of this country &amp; they promised to provide best services
            </p>
            <div class="flex space-x-4 mt-4">
              <a class="text-white" href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a class="text-white" href="#">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a class="text-white" href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a class="text-white" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a class="text-white" href="#">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">
              Our Services
            </h3>
            <ul>
              <li>
                Clinical Histopathology Tests
              </li>
              <li>
                Clinical Biochemistry Tests
              </li>
              <li>
                Vaccine Research Center
              </li>
              <li>
                Clinical Microbiology Tests
              </li>
              <li>
                Complete Health Checkup
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">
              For Customers
            </h3>
            <ul>
              <li>
                Upload Prescription
              </li>
              <li>
                Request a call Back
              </li>
              <li>
                Healthcare Packages
              </li>
              <li>
                Download Reports
              </li>
              <li>
                Track Progress
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">
              Opening Hour
            </h3>
            <ul>
              <li>
                Monday
              </li>
              <li>
                Tuesday
              </li>
              <li>
                Wednesday
              </li>
              <li>
                Thursday
              </li>
              <li>
                Friday
              </li>
              <li>
                Saturday
              </li>
              <li>
                Sunday
              </li>
            </ul>
          </div>
          <div className='mt-11 mr-20'>
            <ul>
              <li>
                <span class="text-green-400">
                  9am - 7am
                </span>
              </li>
              <li>
                <span class="text-green-400">
                  9am - 7am
                </span>
              </li>
              <li>
                <span class="text-green-400">
                  9am - 7am
                </span>
              </li>
              <li>
                <span class="text-green-400">
                  9am - 7am
                </span>
              </li>
              <li>
                <span class="text-green-400">
                  9am - 7am
                </span>
              </li>
              <li>
                <span class="text-green-400">
                  9am - 7am
                </span>
              </li>
              <li>
                <span class="text-red-500">
                  Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-10 inline-block flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">

          <div class="flex lg:flex-row  sm:flex-col items-center space-x-5 justify-around w-[95vw]">
            <div class="flex items-center space-x-2 ">
              <FontAwesomeIcon icon={faPhone} />
              <span>
                +234 567 899
              </span>
            </div>
            <div class="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className='ml-10'>
                mailto:info@patholab.com
              </span>
            </div>
            <div class="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMap} />
              <span>
                183 Marina Avenue, Miami Ci Mall, USA
              </span>
            </div>
          </div>
          <div class="flex lg:flex-row sm:flex-col items-center space-x-24 justify-center w-[95vw] mt-8">
            <div class="flex items-center">

              <span>
                © 2023, BRAVISTHEME, All rights reserved
              </span>
            </div>
            <div class="flex items-center space-x-2">
              <span className='space-x-2' >
                <a class="text-white" href="#">
                  Privacy Policy
                </a>
                <a class="text-white" href="#">
                  Terms &amp; Condition
                </a>
                <a class="text-white" href="#">
                  *Promo T&amp;Cs Apply
                </a>
              </span>
            </div>
            <div class="flex items-center space-x-2">

              <span className='flex space-x-3'>

                <div className=''>Payment Gateways:</div>

                <div class="flex space-x-2 ">
                  <img alt="Payment Gateway 1" height="20" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/card-5.png" width="25" />
                  <img alt="Payment Gateway 2" height="20" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/card-3.png" width="25" />
                  <img alt="Payment Gateway 3" height="20" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/card-2.png" width="25" />
                  <img alt="Payment Gateway 4" height="20" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/08/card-1.png" width="25" />
                </div>
              </span>
            </div>
          </div>

        </div>
      </footer></div>
  )
}

export default Footer