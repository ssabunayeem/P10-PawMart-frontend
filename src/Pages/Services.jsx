import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

const Services = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getInitialCategory = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get("category") || "";
    };

    const [services, setServices] = useState([]);
    const [category, setCategory] = useState(getInitialCategory);

    // Remove the effect that sets category from URL query

    // Step 2: fetch services whenever category changes
    useEffect(() => {
        let url = "https://p10-paw-mart-backend.vercel.app/services";
        if (category) url += `?category=${encodeURIComponent(category)}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));
    }, [category]);

    // Step 3: update URL when select changes
    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);

        // Update the URL query param
        const params = new URLSearchParams(location.search);
        if (value) {
            params.set("category", value);
        } else {
            params.delete("category");
        }
        navigate({ pathname: "/services", search: params.toString() }, { replace: true });
    };

    return (


        <div>
            <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto my-10 animate__animated animate__slideInDown'>
                <h2 className='text-center text-xl md:text-4xl font-bold mt-5'>All Available Services & Products</h2>

                {/* Select Box */}
                <div className='mt-5 w-64'>
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="select select-primary bg-white "
                    >
                        <option value="">All Categories</option>
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Care Products">Care Products</option>
                    </select>
                </div>
            </div>



            <div className='mb-12 flex flex-col justify-center items-center animate__animated animate__zoomIn'>

                {/* all cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-15 my-5'>
                    {
                        services.map(service =>
                            <div key={service?.serviceId} className="card bg-[#f3e9fc]  w-96 shadow-xl transition-all duration-400 hover:scale-105">
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

        </div>
    );
};

export default Services;
