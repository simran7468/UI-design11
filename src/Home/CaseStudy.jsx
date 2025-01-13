import React, { useState } from 'react';
import Header from '../HeroPage/Header'
import { caseStudy } from './CaseStudyData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ScrollHeader from '../Common/ScrollHeader';

const CaseStudy = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (<> <ScrollHeader/>
    <div className='container mx-auto flex flex-col mb-5 '>
    
      <div className='flex flex-col items-center m-6 justify-center'>
        <h3 className='text-color-sky text-pretty font-semibold'>Promising Best Quality Services</h3>
        <h1 className='text-blue-900 text-3xl p-4 text-pretty'>Our amazing Healthcare Packages</h1>
        <p>As an investment firm, our main goal is to provide the best services to our customers & create the best ideas to help grow our clients.</p>
      </div>

      <div className='flex flex-row h-[450px] border-black  rounded-xl space-x-3 '>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          breakpoints={{
                           
                           640: { slidesPerView: 1 }, 
                           768: { slidesPerView: 2 }, 
                           1024: { slidesPerView: 4 },
                       }}
         
          // scrollbar ={{draggable:false, hide:true}}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true, hide: true }}
          loop={true}
          className='mySwiper'
        >
          {caseStudy.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='relative w-full  bg-gray-300 mb-10 rounded-3xl  transform scale-y-10 transition-transform duration-300 gap-4 '
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              <img src={item.image} alt='image' className=' h-[500px] w-full hover:fill-blue-500 rounded-3xl' />

              <div className='bg-gradient-to-b from-cyan-500 to-cyan-30 rotate-y-180 bg-blue-400'>
                {hoveredIndex === index && (
                  <div className={`border-l-sky-500 items-center justify-center absolute border-r-sky-500 border-r-8 border-l-8 w-[370px] h-[120px]  inset-x-0 bottom-0 mb-20  ml-4 rounded-lg animate-fade-in-up  bg-white text-white text-center  transform transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-y-0' : 'translate-y-full' 
                  }`}
                >
                {/* <div class="w-full h-0 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[#4f4d4d] absolute rounded-lg left-0 bottom-0 overflow-hidden flex flex-col items-center justify-center text-center px-10 transition-all duration-500"></div> */}

                  <p className='text-blue-700 justify-center items-center'>{item.message || "Custom Message"}</p>
                </div>
                )}
                </div>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default CaseStudy;
