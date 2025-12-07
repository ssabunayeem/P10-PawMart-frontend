import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {


    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
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
        }

        // console.log(formData);

        axios.post('https://p10-paw-mart-backend.vercel.app/services', formData)
            .then(res => {
                console.log(res);
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Service Added!",
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


    };

    return (
        <div className="max-w-3xl mx-auto shadow-2xl p-6 md:my-5 rounded-lg scale-95 hover:scale-100 transition-all duration-400 bg-[#f3e9fc]  px-10 animate__animated animate__zoomIn">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Service / Product</h2>

            <form onSubmit={handleSubmit} className="space-y-4 ">

                {/* Product / Pet Name */}
                <div>
                    <label className="font-semibold">Product / Pet Name</label>
                    <input
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
                    className="btn w-full bg-[#6F00FF] text-white text-lg font-semibold py-5 rounded hover:btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddService;