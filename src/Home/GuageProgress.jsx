import React from "react";
import progress1 from '../assets/HomeImages/progress1.png'
import progress2 from '../assets/HomeImages/progress2.png'

const GaugeProgress = () => {

  // const GaugeProgress = ({ progress, title, description }) => {
  // const strokeWidth = 5;
  // const radius = 50 - strokeWidth / 2; // Radius of the circle
  // const circumference = 2 * Math.PI * radius;
  // const offset = circumference - (progress / 100) * circumference;
  const obj = [
    {
      img: progress1,
      value: '75%',
      tittle: "Vaccine Development",
      description: "Patholab Laboratory is equipped with best world class machinery & reagents."
    },
    // {
    //   img: progress2,
    //   value: '88%',
    //   tittle: "Clinic Management",
    //   description: "Patholab Laboratory is equipped with best world class machinery & reagents."
    // }
  ]

  return (
    // <div className="flex flex-row items-center justify-center space-y-4">

    //   <div className="relative flex justify-center items-center">
    //     <svg
    //       className="w-24 h-24 transform -rotate-90"
    //       viewBox="0 0 100 100"
    //       // xmlns="http://www.w3.org/2000/svg"
    //     > 
    //       <circle
    //         cx="50"
    //         cy="50"
    //         r={radius}
    //         stroke="gray"
    //         strokeWidth={strokeWidth}
    //         fill="transparent"
    //        className="transition-all  animate-fade-in-up duration-500"
    //       />

    //       <circle
    //         cx="50"
    //         cy="50"
    //         r={radius}
    //         stroke="blue"
    //         strokeWidth={strokeWidth}
    //         fill="transparent"
    //         strokeDasharray={circumference}
    //         strokeDashoffset={offset}

    //         className="transition-all  animate-fade-in-up duration-500"

    //       />
    //     </svg>
    //    <div className="flex flex-col">
    //    <h3 className="text-xl font-semibold">{title}</h3>
    //    <p className="text-center text-sm text-gray-600">{description}</p>
    //    </div>
    //     {/* Progress Percentage */}
    //     <div className=" text-lg font-bold">{Math.round(progress)}%</div>
    //   </div>
    // </div>
    < >
       {obj.map((item, index) => (
        <div key={index} className="relative flex flex-row items-center ">
          
          {/* <div className="relative">
            <img src={item.img} alt='img' className="w-32 h-32 relative  object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">
              {item.value}
            </div>
          </div> */}
          <div className="text-center flex-col flex ">
            <h2 className="text-lg text-blue-600">{item.tittle}</h2>
            <p className="text-gray-400 text-md">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  )
};

export default GaugeProgress;
