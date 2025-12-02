import React from 'react';

import { FaThermometerThreeQuarters, FaTemperatureHigh, FaPaw, FaBone, FaSnowflake } from 'react-icons/fa';

const tips = [
    {
        id: 1,
        title: "Keep Indoor Warmth Consistent",
        description:
            "Provide a cozy indoor space with soft blankets and heated bedding to protect pets from drafts and maintain their body temperature during prolonged cold spells."
    },
    {
        id: 2,
        title: "Protect Sensitive Paws",
        description:
            "Cold surfaces can dry and crack paw pads; clean paws after walks and apply a nourishing paw balm to prevent irritation and discomfort in freezing conditions."
    },
    {
        id: 3,
        title: "Ensure Proper Winter Nutrition",
        description:
            "Increase caloric intake moderately and offer warm, easily digestible meals or broths to help your pet maintain energy levels and stay comfortable during colder months."
    },
    {
        id: 4,
        title: "Limit Exposure to Harsh Weather",
        description:
            "Limit outdoor exposure on extremely cold or windy days; opt for brief walks, protective clothing, and supervised indoor play to reduce risk of hypothermia and injury."
    }
];


const WinterCareTips = () => {
    return (
        <div className='my-12 flex flex-col justify-center items-center px-[5%] lg:px-[15%] mx-3.5 md:mx-auto'>

            <h2 className="text-2xl lg:text-4xl font-bold my-8">Winter Care Tips</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 my-5">

                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className="border border-gray-200 rounded-lg p-8 gap-4 items-start flex-1  bg-[#dae3ee]">
                        <div className="shrink-0">

                            <div className="text-5xl">
                                {tip.id === 1 && <div className='text-red-500'> <FaTemperatureHigh /> </div>}
                                {tip.id === 2 && <div className='text-amber-500'> <FaPaw /> </div>}
                                {tip.id === 3 && <div className='text-slate-500'> <FaBone /> </div>}
                                {tip.id === 4 && <div className='text-blue-500'> <FaSnowflake /> </div>}
                            </div>

                        </div>

                        <div className="">
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