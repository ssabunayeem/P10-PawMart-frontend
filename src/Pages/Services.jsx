import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])




    return (
        <div className='my-12 flex flex-col justify-center items-center'>

            {/* all cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-15 my-5'>
                {
                    services.map(service =>
                        <div key={service?.serviceId} className="card bg-[#dae3ee] w-96 shadow-xl">
                            <figure>
                                <img
                                    className='w-full h-[300px] object-top-right object-cover'
                                    src={service?.image}
                                    alt="Shoes" />
                            </figure>

                            <div className="card-body">

                                <h2 className="card-title font-bold">{service?.name}</h2>
                                <p className='text-gray-500'>{service?.description}</p>
                                <p className='font-bold'>Location: {service?.location}</p>

                                <div className='flex justify-evenly font-semibold my-2'>
                                    <p>Price: {service?.price} $ </p>
                                    <p className='text-right'>Date: {service?.date}</p>
                                </div>


                                <div className="card-actions justify-end">
                                    <button className="btn btn-circle bg-[#525CEB] w-full text-white">
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

export default Services;