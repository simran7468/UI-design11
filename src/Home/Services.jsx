import React from 'react';
import { sectionData } from '../Home/S1';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollHeader from '../Common/ScrollHeader';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <>
            <ScrollHeader />
            <div className="items-center w-full   bg-cyan-200 flex flex-col">
                <div className="mt-10 flex flex-col gap-2 w-full items-center justify-center text-center">
                    <h4 className="text-teal-500 font-bold text-md">
                        Versatile Laboratory Service Provider
                    </h4>
                    <h1 className="font-serif text-3xl font-bold">
                        Our amazing Services
                    </h1>
                    <p className="text-md text-gray-500">
                        We have world class pathologists & Lab assistants. We are equipped with the best laboratory machinery &
                        reagents. We ensure best quality findings.
                    </p>
                </div>
                <div className="flex flex-row   container mx-auto">
                    <Swiper
                     breakpoints={{
                           
                            640: { slidesPerView: 1 }, 
                            768: { slidesPerView: 2 }, 
                            1024: { slidesPerView: 4 },
                        }}
                        // slidesPerView={4}
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}

                        pagination={{ clickable: true, hide: true }}
                        scrollbar={{ draggable: true, hide: true }}
                        loop={true}
                        className="myswiper border h-96"
                    >
                        {sectionData.map((item, index) => (
                            <SwiperSlide key={index} >
                                <div className="group border   mt-7">
                                    <div className="absolute bg-white text-teal-500 rounded-lg p-4 text-center max-w-xs transition-all duration-1000 ">
                                        <div className="mb-4">
                                            <FontAwesomeIcon icon={item.icon} size="3x" />
                                        </div>
                                        <h2 className="text-xl chakra-petch-semibold text-blue-950 mb-4 ">{item.h}</h2>
                                        <p className="mb-4  text-gray-400">{item.p}</p>
                                        <a href="#" className=" text-sm hover:underline">
                                            READ MORE <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                    <div className="absolute bg-white text-teal-500 rounded-lg p-4 text-center max-w-xs transition-all duration-200 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-teal-500 group-hover:text-white group-hover:shadow-lg">
                                        <div className="mb-4">
                                            <FontAwesomeIcon icon={item.icon} size="3x" />
                                        </div>
                                        <h2 className="text-xl chakra-petch-semibold mb-4 transform-none">{item.h}</h2>
                                        <p className="mb-4 ">{item.p}</p>
                                        <a href="#" className=" text-sm hover:underline ">
                                            READ MORE <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
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

export default Services;
