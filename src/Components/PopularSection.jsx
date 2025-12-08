import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularSection = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        axios('https://p10-paw-mart-backend.vercel.app/services')
            .then(res => setServices(res.data))
            .catch(err => console.log(err))
    }, [])


    console.log(services);


    return (
        <div className='my-12 flex flex-col justify-center items-center'>
            <div>
                <h2 className='text-2xl lg:text-4xl font-bold my-8'>Popular Winter Care Services</h2>
            </div>

            {/* all cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-15 my-5 \'>
                {
                    services.slice(0, 6).map(service =>
                        <div key={service?.serviceId} className="card bg-[#f3e9fc]  w-96 shadow-xl hover:scale-105 transition-all duration-400 animate__slideOutUp">
                            <figure>
                                <img
                                    className='w-full h-[300px] object-top-right object-cover'
                                    src={service?.image}
                                    alt="Shoes" />
                            </figure>


                            <div className="card-body">

                                <h2 className="card-title font-bold text-blue-700!">{service?.name}</h2>
                                <p className='text-gray-500'>{service?.description}</p>

                                <div className='flex  gap-15 font-semibold my-2'>

                                    <div className='flex flex-col justify-evenly font-semibold space-y-2'>
                                        <p className=''>Location: </p>
                                        <p>Price: </p>
                                        <p className=''> Categories: </p>
                                    </div>

                                    <div className='flex flex-col justify-evenly font-semibold space-y-2'>
                                        <p className=''>{service?.location}</p>
                                        <p>{service?.price} $ </p>
                                        <p className=''>{service?.category}</p>
                                    </div>

                                </div>


                                <div className="card-actions justify-end">
                                    <button className="btn btn-circle bg-[#6F00FF] w-full text-white">
                                        <Link to={`/details/${service?._id}`}>
                                            View Details
                                        </Link>
                                    </button>
                                </div>

                            </div>


                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default PopularSection;