import React from 'react'

const HealthPackages = () => {
    
  return (
    <div className="bg-blue-50 p-8 flex-col">
    <div className= "grid grid-cols  w-full  justify-center ">
    <h3 className='text-md text-color-sky justify-center  ml-40'>Promising Best Quality Services</h3>
    <h1 className='text-blue-950 ml-20 text-3xl chakra-petch-bold'>Our amazing Healthcare Packages</h1>
    <p className='text-sm text-gray-400 m-4'>As a Investment firm our main goal is to provide best services to our customers & create best ideas to help grow our clients.</p>

    </div>

    <div className="bg-white rounded-lg shadow p-4 flex  flex-col justify-center space-x-6 mb-8">
      <button className="px-4 py-2 bg-green-500 text-white rounded-full shadow-lg">
        Show All
      </button>
      <button className="px-4 py-2 text-gray-500 hover:text-black">Complete Care</button>
      <button className="px-4 py-2 text-gray-500 hover:text-black">Family Care</button>
      <button className="px-4 py-2 text-gray-500 hover:text-black">Fitness Care</button>
    </div>

  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
   
     
    </div>
  </div>
  )
}

export default HealthPackages
