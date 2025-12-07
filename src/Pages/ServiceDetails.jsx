import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ServiceDetails = () => {

    const [service, setService] = useState([]);
    // const [service, setService] = useState({});
    const { myId } = useParams();
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const navigation = useNavigate();



    useEffect(() => {
        fetch(`https://p10-paw-mart-backend.vercel.app/services/${myId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [myId])

    console.log("3000", service);


    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const price = parseFloat(form.price.value);
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const quantity = parseInt(form.quantity.value);
        const phone = form.phone.value;
        const address = form.address.value;
        const note = form.note.value;

        const formData = {
            productId: myId,
            productName,
            price,
            buyerName,
            buyerEmail,
            quantity,
            phone,
            address,
            note,
            date: new Date(),
        }


        axios.post('https://p10-paw-mart-backend.vercel.app/orders', formData)
            .then(res => {
                console.log(res);
                navigation('/my-orders');
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Order Successful!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });





    }


    if (loading) {
        return (<div className='flex justify-center items-center min-h-screen'>
            <progress className="progress w-56"></progress>
        </div>);
    }



    return (
        <div className='flex flex-col justify-between items-center'>
            <div className='flex flex-col lg:flex-row md:gap-10 justify-between items-center my-5 '>
                <img className='w-[800px] h-[400px] md:h-[800px] object-cover rounded-2xl' src={service?.image} alt="" />

                <div className="card-body font-semibold my-2  text-lg text-gray-1000">
                    <h2 className="card-title text-3xl">{service?.name}</h2>
                    <p className='text-gray-1000'>{service?.description}</p>
                    <p>Category : {service?.category}</p>
                    <p>Location: {service?.location}</p>
                    <p>Provider Email: {service?.email}</p>
                    <p>Price: {service?.price} $</p>
                    <p>Available Date: {service?.date}</p>




                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className='mt-5'>
                        <button
                            className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>
                            Adapt/Order
                        </button>
                        <dialog id="my_modal_3" className="modal bg-black/50 backdrop-blur-md md:flex justify-center items-center ">
                            <div className="modal-box scale-90 hover:scale-100 bg-[#f3e9fc]  min-w-svw md:min-w-lg lg:max-w-xl">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn text-red-500 btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <form onSubmit={handleOrder} className="fieldset  border-base-300 rounded-box w-full text-black">
                                    <legend className="text-xl text-center">Order details</legend>

                                    <label className="fieldset-legend">Product Name</label>
                                    <input readOnly defaultValue={service?.name} type="text" name='productName' className="input w-full bg-gray-100" placeholder="Product Name" />

                                    <label className="fieldset-legend">Price</label>
                                    <input readOnly defaultValue={service?.price} type="number" name='price' className="input w-full bg-gray-100" placeholder="Price" />

                                    <label className="fieldset-legend">Buyer Information</label>
                                    <input defaultValue={user?.displayName} type="text" name='buyerName' className="input w-full" placeholder="Buyer Name" />

                                    <input readOnly defaultValue={user?.email} type="email" name='buyerEmail' className="input w-full bg-gray-100" placeholder="Email" />


                                    <input required type="number" name='quantity' className="input w-full" placeholder="Product Quantity" />

                                    <input required type="text" name='phone' className="input w-full" placeholder="Phone Number" />

                                    <input type="text" name='address' className="input w-full" placeholder="Address" />

                                    <textarea type="text" name='note' className="textarea w-full" placeholder="Additional Message"></textarea>
                                    <button type='submit' className="btn btn-primary w-full mt-3">Order</button>
                                </form>
                            </div>
                        </dialog>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default ServiceDetails;