import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FilteredCategoryPage = () => {
    const { categoryName } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://p10-paw-mart-backend.vercel.app/services?category=${encodeURIComponent(categoryName)}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err));
    }, [categoryName]);

    return (
        <div className="max-w-7xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold mb-6">{categoryName} Services</h1>

            {services.length === 0 ? (
                <p className="text-gray-600">No services found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <div key={service._id} className="card p-4 border rounded-lg shadow hover:shadow-lg">
                            <h2 className="text-xl font-semibold">{service.name}</h2>
                            <p className="text-gray-500">{service.category}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilteredCategoryPage;
