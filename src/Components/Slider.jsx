import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-[700px]">
                        <img src={img1} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 space-y-4">
                            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                                <Typewriter
                                    words={['All Pet Supplies in One Place.']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h1>
                            <p className="text-gray-200 text-lg md:text-2xl max-w-xl">
                                Get all your pet supplies, food, and toys.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full h-[700px]">
                        <img src={img2} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 space-y-4">
                            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                                <Typewriter
                                    words={['Adopt, Don’t Shop — Give a Pet a Home.']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h1>
                            <p className="text-gray-200 text-lg md:text-2xl max-w-xl">
                                Every adoption saves a life and gives a pet a forever family.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative w-full h-[700px]">
                        <img src={img3} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 space-y-4">
                            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                                <Typewriter
                                    words={['Because Every Pet Deserves Love and Care']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h1>
                            <p className="text-gray-200 text-lg md:text-2xl max-w-xl">
                                Provide the warmth, safety and affection every animal deserves.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="relative w-full h-[700px]">
                        <img src={img4} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 space-y-4">
                            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                                <Typewriter
                                    words={['Connecting Hearts to Paws — Your Next Best Friend Awaits.']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h1>
                            <p className="text-gray-200 text-lg md:text-2xl max-w-xl">
                                Discover loyal companions ready to fill your life with joy.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide>
                    <div className="relative w-full h-[700px]">
                        <img src={img5} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 space-y-4">
                            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                                <Typewriter
                                    words={['Every Pet Has a Story — Start the Happiest Chapter Together.']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h1>
                            <p className="text-gray-200 text-lg md:text-2xl max-w-xl">
                                Build memories with a pet who’s ready for a loving home.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
