import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateServices = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [service, setService] = useState();
    const [category, setCategory] = useState(service?.category);
    const navigation = useNavigate();

    useEffect(() => {
        axios(`https://p10-paw-mart-backend.vercel.app/services/${id}`)
            .then(res => {
                setService(res.data)
                setCategory(res.data.category);
            })

    }, [id]);

    console.log(service);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const date = form.date.value;
        const email = form.email.value;

        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            date,
            email,
            createdAt: service?.createdAt
        }

        console.log(formData);
        axios.put(`https://p10-paw-mart-backend.vercel.app/update/${id}`, formData)
            .then(res => {
                console.log(res.data);
                navigation('/my-services');
                Swal.fire({
                    title: "Order Successful!",
                    icon: "success",
                    draggable: true
                });
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

    return (
        <div className="max-w-2xl mx-auto bg-[#f3e9fc] shadow-2xl p-6 md:my-5 rounded-lg animate__animated animate__zoomIn hover:scale-105 transition-all duration-400 px-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Update Service / Product</h2>

            <form onSubmit={handleUpdate} className="space-y-4">

                {/* Product / Pet Name */}
                <div>
                    <label className="font-semibold">Product / Pet Name</label>
                    <input
                        defaultValue={service?.name}
                        type="text"
                        name="name"
                        required

                        className="w-full border p-2 rounded mt-1"
                        placeholder="Enter name"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="font-semibold">Category</label>
                    <select
                        name="category"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border p-2 rounded mt-1"
                    >
                        <option value="">Select Category</option>
                        <option value="Pets">Pets</option>
                        <option value="Food">Food</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Care Products">Care Products</option>
                    </select>
                </div>

                {/* Price */}
                <div>
                    <label className="font-semibold">Price</label>
                    <input
                        defaultValue={service?.price}
                        type="number"
                        name="price"
                        required
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Enter price"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="font-semibold">Location</label>
                    <input
                        defaultValue={service?.location}
                        type="text"
                        name="location"
                        required

                        className="w-full border p-2 rounded mt-1"
                        placeholder="City / Area"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="font-semibold">Description</label>
                    <textarea
                        defaultValue={service?.description}
                        name="description"
                        required

                        className="w-full border p-2 rounded mt-1 h-24"
                        placeholder="Describe your product/pet"
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label className="font-semibold">Image URL</label>
                    <input
                        defaultValue={service?.image}
                        type="url"
                        name="image"
                        required

                        className="w-full border p-2 rounded mt-1"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="font-semibold">Pick-Up / Available Date</label>
                    <input
                        defaultValue={service?.date}
                        type="date"
                        name="date"
                        required

                        className="w-full border p-2 rounded mt-1"
                    />
                </div>

                {/* Email (readonly) */}
                <div>
                    <label className="font-semibold">Email (Your Account)</label>
                    <input
                        value={user?.email}
                        type="email"
                        name="email"
                        readOnly
                        className="w-full border p-2 rounded mt-1 bg-gray-200"
                    />
                </div>

                <button
                    type="submit"
                    className="btn w-full bg-[#525CEB] text-white text-lg font-semibold py-5 rounded hover:btn-primary"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateServices;