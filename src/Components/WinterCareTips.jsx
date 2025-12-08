import React from 'react';

import {
    FaShieldAlt,
    FaHeartbeat,
    FaLock,
    FaHandsHelping
} from "react-icons/fa";

const tips = [
    {
        id: 1,
        title: "Trusted & Verified Adoptions",
        description:
            "Every pet listed on PawMart comes from verified owners, shelters, or ethical breeders. We ensure authenticity so you can adopt with confidence and peace of mind."
    },
    {
        id: 2,
        title: "Healthy, Well-Cared Pets",
        description:
            "All pets undergo basic health screening and documentation checks before being listed. You get transparent health details so you know exactly how your new companion is doing."
    },
    {
        id: 3,
        title: "Safe & Transparent Process",
        description:
            "No hidden info, no shady dealings. PawMart ensures safe communication, verified profiles, and a smooth adoption journey between adopter and pet owner."
    },
    {
        id: 4,
        title: "Support Local Shelters & Rescuers",
        description:
            "By adopting through PawMart, you help shelters, rescuers, and responsible owners find loving homes for pets in need — making a real impact in your community."
    }
];

const WinterCareTips = () => {
    return (
        <div className='my-12 flex flex-col justify-center items-center px-[5%] lg:px-[15%] mx-3.5 md:mx-auto '>

            <h2 className="text-2xl lg:text-4xl font-bold my-8">Why Adopt from PawMart?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 my-5">

                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className="border border-gray-200 rounded-lg p-8 gap-4 items-start flex-1  
                          bg-[#f3e9fc] hover:scale-110 transition-all duration-400"
                    >
                        <div className="shrink-0">
                            <div className="text-5xl">
                                {tip.id === 1 && <div className='text-blue-600'><FaShieldAlt /></div>}
                                {tip.id === 2 && <div className='text-green-600'><FaHeartbeat /></div>}
                                {tip.id === 3 && <div className='text-purple-600'><FaLock /></div>}
                                {tip.id === 4 && <div className='text-orange-600'><FaHandsHelping /></div>}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium my-5">{tip.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default WinterCareTips;
