import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyServices = () => {

    const [myServices, setMyServices] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyServices(data))
            .catch(err => console.log(err))
    }, [user?.email])

    console.log(myServices);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast('Service deleted', {
                        style: {
                            background: "black",
                            color: "red",
                            fontSize: "16px",
                            fontWeight: "bold",
                        }
                    });
                    const remaining = myServices.filter(service => service._id !== id);
                    setMyServices(remaining);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='min-h-[90vh]'>

            <h2 className='text-center text-xl md:text-4xl font-bold mt-5'>All Services you have added</h2>

            <div className='flex lg:block justify-center items-center space-x-3 md:py-10 md:pb-20 md:px-5 lg:max-w-[1200px] mx-auto animate__animated animate__zoomInUp scale-90 md:scale-100 -mt-20 md:mt-0 '>
                <div className="overflow-x-auto shadow-2xl rounded-xl">
                    <table className=" table bg-[#f3e9fc]">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#3B0270] text-white md:pl-5'>
                                <th className='md:pl-20'>Name</th>
                                <th className='md:pl-15'>Email</th>
                                <th className='lg:pl-12'>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* row 1 */}
                            {
                                myServices.map(service =>

                                    <tr key={service._id} className='transition-all duration-400 md:scale-90 hover:scale-100 hover:shadow-violet-400/50 hover:bg-[#e2cbf8] '>

                                        <td className='text-center'>
                                            <div className="flex flex-col md:flex-row items-center gap-3 ">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-18 w-18">
                                                        <img
                                                            src={service?.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{service?.name}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td> {service?.email} </td>

                                        <td >
                                            <div className='flex justify-evenly items-center gap-25'>
                                                <div className=' md:text-2xl text-amber-800'>
                                                    {service?.price} $
                                                </div>

                                                <div>
                                                    <div className='flex flex-col md:flex-row justify-evenly items-stretch gap-1 '>
                                                        <Link to={`/update-services/${service?._id}`}
                                                            className="btn btn-primary btn-sm px-5">Edit
                                                        </Link>

                                                        <button onClick={() => handleDelete(service?._id)} className="btn btn-error btn-sm">Delete</button>

                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>

                                )
                            }


                        </tbody>

                    </table>
                </div>
            </div>


        </div >
    );
};

export default MyServices;