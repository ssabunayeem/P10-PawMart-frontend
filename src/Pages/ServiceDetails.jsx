import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const [services, setServices] = useState([]);
    const [service, setService] = useState({});
    const { myId } = useParams();

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    const findResult = services.find(service => service.serviceId == myId);
    console.log(findResult);



    return (
        <div className='flex flex-col justify-between items-center'>
            <div className='flex flex-col lg:flex-row md:gap-10 justify-between items-center my-5 '>
                <img className='w-[800px] h-[400px] md:h-[800px] object-cover rounded-2xl' src={findResult?.image} alt="" />

                <div className="card-body font-semibold my-2  text-lg text-gray-500">
                    <h2 className="card-title text-3xl">{findResult?.serviceName}</h2>
                    <p className='text-gray-500'>{findResult?.description}</p>
                    <p>Category : {findResult?.category}</p>
                    <p>Provider Name: {findResult?.providerName}</p>
                    <p>Provider Email: {findResult?.providerEmail}</p>
                    <p>Price: {findResult?.price}</p>
                    <p>Rating: {findResult?.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;