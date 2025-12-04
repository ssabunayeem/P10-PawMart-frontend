import React from 'react';

const AddService = () => {
    return (
        <div className="max-w-xl mx-auto shadow-2xl p-6 md:my-5 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Service / Product</h2>

            <form className="space-y-4">

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
                        type="email"
                        name="email"
                        readOnly
                        className="w-full border p-2 rounded mt-1 bg-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    className="btn w-full bg-[#525CEB] text-white text-lg font-semibold py-5 rounded hover:btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddService;