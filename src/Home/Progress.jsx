import React from 'react'


const Progress = () => {
  return (
      <div className="bg-white">
                    <main className="p-8 md:flex md:justify-between">
                        <div className="md:w-1/2">
                            <h2 className="text-teal-600 text-lg">Versatile Laboratory Service Provider</h2>
                            <h1 className="text-4xl font-bold text-blue-900 mt-2">Patholab Provides the best laboratory experience</h1>
                            <p className="text-gray-700 mt-4">Patholab’s Complete Care Geno identify DNA variant specific to an individual & provides report about detoxification. Hormone Insight can be useful at the Various stages of life, like discovering.</p>
                            <div className="mt-8">
                                <div className="mb-4">
                                    <div className="flex justify-between">
                                        <span className="text-blue-900">Diagnostic Facility</span>
                                        <span className="text-blue-900">90%</span>
                                    </div>
                                    <div className="bg-gray-200 h-2 rounded-full">
                                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between">
                                        <span className="text-blue-900">Accuracy in Findings</span>
                                        <span className="text-blue-900">96%</span>
                                    </div>
                                    <div className="bg-gray-200 h-2 rounded-full">
                                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between">
                                        <span className="text-blue-900">Pathology Testing</span>
                                        <span className="text-blue-900">85%</span>
                                    </div>
                                    <div className="bg-gray-200 h-2 rounded-full">
                                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mt-8">
                                <img src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/team-single-120x120.jpg" alt="Dylan Ross Miller" className="rounded-full ring-gray-300  hover:ring-color-sky ring-4 w-16"/>
                                <div>
                                    <p className="text-blue-900 font-bold">Dylan Ross Miller</p>
                                    <p className="text-gray-600">CEO & Founder, Patholab Inc.</p>
                                </div>
                                <div className="ml-auto flex items-center">
                                    <img src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/Google-Rating.png" alt="Google Rating" className="mr-2"/>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center items-center relative ">
                        <div  className=" absolute w-40 flex flex-col items-center justify-center left-24 bottom-5 clip-hexagon bg-teal-600 text-white p-4 rounded-xl bg-gradient-to-r from-teal-400 to-green-400 hover:bg-gradient-to-l hover:from-teal-400 hover:to-green-500 z-50 h-40" style={
                                    {
                                          clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                                    }
                                }>
                                
                                <p className="text-5xl font-bold">25</p>
                                <p className="text-md font-semibold">YEARS</p>
                                <p className="text-xl font-semibold">Experience</p>                               
                            </div>
                        
                            <div style={
                                    {
                                          clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                                          aspectRatio: "1 / calc(cos(30deg))",
                                    }
                                } className='rounded-lg border-black  ' >
                            <img src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/banner-2-800x800.jpg"   alt="Team of doctors" className="rounded-lg w-96 border-green-400 transform hover:scale-125 duration-700 "/>
                                </div>
                                <div style={
                                    {
                                          clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                                          aspectRatio: "1 / calc(cos(30deg))",
                                    }
                                } className='absolute bottom-6   right-1 rounded-lg border-black  ' >
                            <img src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/09/banner-3-600x600.jpg"   alt="Team of doctors" className="rounded-lg w-48 border-green-400 transform hover:scale-125 duration-700 "/>
                                </div>

                            
                            
                        </div>
                    </main>
                </div>
  )
}

export default Progress