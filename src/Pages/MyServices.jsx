import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';


const MyServices = () => {

    const [myServices, setMyServices] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://p10-paw-mart-backend.vercel.app/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyServices(data))
            .catch(err => console.log(err))
    }, [user?.email]);

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://p10-paw-mart-backend.vercel.app/delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            const remaining = myServices.filter(s => s._id !== id);
                            setMyServices(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err));


            }
        });


    };

    return (
        <div className='min-h-[90vh] px-3 animate__animated animate__zoomIn'>
            <h2 className='text-center text-xl md:text-4xl font-bold mt-5'>
                All Services you have added
            </h2>

            <div className='lg:max-w-[1200px] mx-auto py-10'>

                {/* ----------- Desktop Table ----------- */}
                <div className="hidden md:block overflow-x-auto shadow-2xl rounded-xl">
                    <table className="table bg-[#f3e9fc] ">
                        <thead>
                            <tr className='bg-[#3B0270] text-white'>
                                <th className='pl-25'>Name</th>
                                <th className='pl-15'>Email</th>
                                <th className=''>Price</th>
                                <th className=''>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {myServices.map(service => (
                                <tr
                                    key={service._id}
                                    className=' hover:bg-[#e2cbf8] scale-90 hover:scale-100 transition-all duration-500'
                                >
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-16 w-16">
                                                    <img src={service.image} alt="service-img" />
                                                </div>
                                            </div>
                                            <div className="font-bold text-lg">{service.name}</div>
                                        </div>
                                    </td>

                                    <td>{service.email}</td>

                                    <td>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-xl text-amber-800 font-semibold'>
                                                {service.price} $
                                            </span>
                                        </div>
                                    </td>
                                    <td>

                                        <div className='flex gap-2'>
                                            <Link
                                                to={`/update-services/${service._id}`}
                                                className="btn btn-primary btn-sm"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() => handleDelete(service._id)}
                                                className="btn btn-error btn-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ----------- Mobile Card View ----------- */}
                <div className="md:hidden space-y-5 -mt-5">
                    {myServices.map(service => (
                        <div
                            key={service._id}
                            className="bg-[#f3e9fc] shadow-lg rounded-2xl overflow-hidden mb-5"
                        >
                            <div className="flex gap-2 w-full">

                                {/* LEFT: Image (50%) */}
                                <div className="w-2/5 h-32">
                                    <img
                                        src={service.image}
                                        alt="service"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* RIGHT: Content (50%) */}
                                <div className="w-3/5 p-3 flex flex-col justify-center">
                                    <p className="text-lg font-bold leading-tight">{service.name}</p>
                                    <p className="text-xs text-gray-600 truncate">{service.email}</p>

                                    <p className="mt-2 text-base font-semibold text-amber-800">
                                        {service.price} $
                                    </p>

                                    <div className="flex gap-2 mt-3">
                                        <Link
                                            to={`/update-services/${service._id}`}
                                            className="btn btn-primary btn-xs flex-1"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(service._id)}
                                            className="btn btn-error btn-xs flex-1"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    );
};

export default MyServices;
