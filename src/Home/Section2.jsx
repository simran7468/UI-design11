import React from 'react'
import S51 from '../assets/HomeImages/S51.jpg'
import S52 from '../assets/HomeImages/S52.jpg'

const Section2 = () => {
  return (
    <main className="container mx-auto py-12">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold leading-tight">
              Patholab Provides the Best Laboratory Experience
            </h2>
            <p>
              Patholab's Complete Care Geno identifies DNA variants specific to
              an individual & provides a report about detoxification. Hormone
              Insight can be useful at the various stages of life, like
              discovering.
            </p>
            <div className="space-y-4">
              <div>
                <p>Diagnostic Facility</p>
                <div className="bg-gray-200 w-full h-2 relative">
                  <div
                    className="bg-teal-500 h-2 progress-bar  transition-all duration-500 animate-puls"
                    style={{ '--width': '90%' }}
                  ></div>
                  {/* <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style="width: 25%"></div>
  </div> */}
                </div>
              </div>
              <div>
                <p>Accuracy in Findings</p>
                <div className="bg-gray-200 w-full h-2 relative">
                  <div
                    className="bg-teal-500 h-2 progress-bar"
                    style={{ '--width': '96%' }}
                  ></div>
                </div>
              </div>
              <div>
                <p>Pathology Testing</p>
                <div className="bg-gray-200 w-full  h-[10px] relative">
                  <div
                    className="bg-teal-500 h-2 progress-bar"
                    style={{ '--width': '85%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-slate-400" >
            {/* Add image or animation */}
            <img src={S51} alt="Doctors" className="   rounded-e-2xl transform scale-95 shadow-lg  w-[300px] p-4"/>
            <img src={S52} alt="Doctors" className=" rounded-full shadow-lg  w-[100px] p-4" />
          </div>
        </div>
      </main>
  )
}

export default Section2;
