import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularSection = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])


    // console.log(services);


    return (
        <div className='my-12 flex flex-col justify-center items-center'>
            <div>
                <h2 className='text-2xl lg:text-4xl font-bold my-8'>Popular Winter Care Services</h2>
            </div>

            {/* all cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-15 my-5'>
                {
                    services.slice(0, 6).map(service =>
                        <div key={service?.serviceId} className="card bg-[#dae3ee] w-96 shadow-xl">
                            <figure>
                                <img
                                    className='w-full h-[300px] object-top-right object-cover'
                                    src={service?.image}
                                    alt="Shoes" />
                            </figure>

                            <div className="card-body">

                                <h2 className="card-title">{service?.serviceName}</h2>
                                <p>{service?.description}</p>

                                <div className='flex justify-evenly font-semibold my-2'>
                                    <p>Price: {service?.price}</p>
                                    <p className='text-right'>Rating: {service?.rating}</p>
                                </div>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-circle bg-[#525CEB] w-full text-white">
                                        <Link to={`/details/${service?.serviceId}`}>
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