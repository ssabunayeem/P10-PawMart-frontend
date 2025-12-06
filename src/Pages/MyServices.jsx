import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';

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

    return (
        <div className='min-h-[60vh]'>
            <h2 className='text-center text-xl md:text-4xl font-bold mt-5'>All Services you have added</h2>

            <div className='flex lg:block justify-center items-center space-x-3 py-10 pb-20 px-5 lg:max-w-[1200px] mx-auto'>
                <div className="overflow-x-auto shadow-2xl rounded-xl hover:shadow-violet-400 duration-300">
                    <table className=" table table-zebra bg-[#a0a5eb6b]">
                        {/* head */}
                        <thead>
                            <tr className='bg-[#6872f7] text-white'>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th className='text-center'>Options</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* row 1 */}
                            {
                                myServices.map(service =>

                                    <tr key={service._id}>

                                        <td className='text-center'>
                                            <div className="flex flex-col md:flex-row items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-18 w-18">
                                                        <img
                                                            src={service?.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{service?.name}</div>
                                                    {/* <div className="text-sm opacity-50">{service?.location}</div> */}
                                                </div>
                                            </div>
                                        </td>

                                        <td> {service?.email} </td>

                                        <td>{service?.price} $</td>
                                        <td >
                                            <div className='flex flex-col md:flex-row justify-evenly items-stretch gap-1 '>
                                                <Link to={`/update-services/${service?._id}`}
                                                    className="btn btn-primary btn-sm px-5">Edit
                                                </Link>
                                                <button className="btn btn-error btn-sm">Delete</button>

                                            </div>
                                        </td>
                                    </tr>

                                )
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyServices;