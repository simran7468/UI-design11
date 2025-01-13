import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import research1 from "../assets/HomeImages/research1.jpg";
import research2 from "../assets/HomeImages/research2.jpg";
import research3 from "../assets/HomeImages/research3.jpg";
import research4 from "../assets/HomeImages/research4.jpg";
import research5 from "../assets/HomeImages/research5.jpg";
import research6 from "../assets/HomeImages/research6.jpg";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

const Research = () => {
  const data = [
    {
      image: research1,
      date: "AUGUST 31, 2023",
      heading: "A Lab's Guide to remote Patient Monitoring",
    },
    {
      image: research2,
      date: "AUGUST 29, 2023",
      heading: "The Value of Osmolality Testing in Nephrology",
    },
    {
      image: research3,
      date: "AUGUST 31, 2023",
      heading: "A Lab's Guide to Modern Speicemen Collection",
    },
    {
      image: research4,
      date: "AUGUST 29, 2023",
      heading: "A Lab's Guide to Modern Speicemen Collection",
    },
    {
      image: research5,
      date: "AUGUST 29, 2023",
      heading: "A Lab's Guide to Modern Speicemen Collection",
    },
    {
      image: research6,
      date: "AUGUST 31, 2023",
      heading: "A Lab's Guide to Modern Speicemen Collection",
    },
  ];

  return (
    <div className="my-[150px] p-4">
      <div className="text-center">
        <h1 className="text-[#39D5C5] text-xl font-semibold mb-4">
          What good works we are doing
        </h1>

        <h2 className="text-5xl font-semibold mb-4">Our Latest Research</h2>

        <p className="text-neutral-500">
          We have world class pathologists & Lab assistants. We are equipped
          with best <br /> laboratory machinery & reagents. We ensure best
          quality findings.
        </p>
      </div>

      {/* Swiper Component */}
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        breakpoints={{
                           
                           640: { slidesPerView: 1 }, 
                           768: { slidesPerView: 2 }, 
                           1024: { slidesPerView: 4 },
                       }}
        loop={true} // Enables looping
        scrollbar={{ draggable: true, hide: true }}
        className="px-[110px] py-10"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-md m-4 mt-8 border-2 p-4  rounded-xl flex flex-col gap-2 items-center">
              <div className="rounded-xl overflow-hidden relative">
                <div className="bg-gradient-to-r from-[#2FEDAE] to-[#24B9D1] absolute px-3 right-0 p-2 z-50 text-white font-medium rounded-bl-3xl">
                  {item.date}
                </div>
                <img
                  className="w-[400px] hover:scale-[1.20] transition-all duration-500"
                  src={item.image}
                  alt=""
                />
              </div>

              <div className="flex items-center gap-2 w-full text-gray-500  font-semibold   text-sm">
                <IoPersonOutline /> <span className="hover:text-color-sky">Ryan Keller</span>
                <div className="text-3xl hover:text-color-sky text-green-400 text-center mb-5">.</div>
                <p className=" hover:text-color-sky">0 Comments</p>
              </div>
              <hr className="w-[380px] text-[gray] mb-3" />

              <div className="flex ml-4 uppercase gap-3 w-full">
                <button className="bg-[#add8e67b] px-3 text-sm uppercase  hover:text-color-sky text-blue-400 py-[4px] rounded-full font-semibold ">
                  AI Science
                </button>
                <button className="bg-[#add8e67b] uppercase text-sm hover:text-color-sky text-blue-400 px-3 py-[4px] rounded-full font-semibold ">
                  Scientific
                </button>
              </div>
              <h1 className="text-[18px] hover:text-color-sky font-semibold my-3">{item.heading}</h1>

              <div className="flex w-full items-center gap-2 text-sm font-[600] text-[#2AD1C2] cursor-pointer group">
                <h2>READ MORE</h2>
                <MdOutlineArrowOutward className="group-hover:rotate-45 transition-all duration-500 text-lg" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" w-full  justify-around mt-6 flex flex-row">
       
        <img className="w-52" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/client-gray-1.png"/>
        <img  className="w-52" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/client-gray-5.png"/>
        <img  className="w-52" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/client-gray-2.png"/>
       <img className="w-52" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/client-gray-3.png"/>
        <img className="w-52" src="https://demo.bravisthemes.com/patholab/wp-content/uploads/2023/10/client-gray-4.png"/>
      

      </div>
    </div>
  );
};

export default Research;
