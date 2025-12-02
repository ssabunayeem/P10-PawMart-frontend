import React from 'react';
import { FaArrowDown } from "react-icons/fa6";

const ArrowAnimated = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }

    return (
        <div className='flex flex-col justify-center items-center'>

            <div
                onClick={handleScroll}
                className=" flex flex-col justify-center items-center bg-[#525CEB] h-[100px] w-[100px] rounded-full absolute z-50 animate-bounce">
                <FaArrowDown className='text-7xl text-white' />
            </div>
        </div>
    );
};

export default ArrowAnimated;