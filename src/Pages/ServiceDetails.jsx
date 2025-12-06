import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {

    const [service, setService] = useState([]);
    // const [service, setService] = useState({});
    const { myId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/services/${myId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [myId])

    console.log("3000", service);



    if (loading) {
        return (<div className='flex justify-center items-center min-h-screen'>
            <progress className="progress w-56"></progress>
        </div>);
    }



    return (
        <div className='flex flex-col justify-between items-center'>
            <div className='flex flex-col lg:flex-row md:gap-10 justify-between items-center my-5 '>
                <img className='w-[800px] h-[400px] md:h-[800px] object-cover rounded-2xl' src={service?.image} alt="" />

                <div className="card-body font-semibold my-2  text-lg text-gray-500">
                    <h2 className="card-title text-3xl">{service?.name}</h2>
                    <p className='text-gray-500'>{service?.description}</p>
                    <p>Category : {service?.category}</p>
                    <p>Location: {service?.location}</p>
                    <p>Provider Email: {service?.email}</p>
                    <p>Price: {service?.price} $</p>
                    <p>Available Date: {service?.date}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;