import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/orders`)
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log("orders", orders);


    return (
        <div className="min-h-[70vh] max-w-7xl mx-auto p-2 my-5 animate__animated animate__zoomIn">
            <h1 className="text-3xl font-bold mb-5 text-center">My Orders</h1>

            {/* ---------- Desktop Table (lg screens) ---------- */}
            <div className="hidden md:block overflow-x-auto ">
                <table className="table w-full bg-[#f3e9fc] ">
                    <thead className="bg-[#3B0270] text-lg text-white">
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id} className="hover text-xl">
                                <td>{index + 1}</td>
                                <td>{order?.productName}</td>
                                <td>${order?.price}</td>
                                <td>{order?.quantity}</td>
                                <td>{order?.phone}</td>
                                <td>{order?.buyerEmail}</td>
                                <td>{order?.address}</td>
                                <td>{new Date(order.date).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ---------- Mobile Card View (sm screens) ---------- */}
            <div className="md:hidden space-y-4">
                {orders.map((order) => (
                    <div key={order._id} className="border rounded-xl p-4 shadow bg-[#f3e9fc]">
                        <p className="font-bold text-xl">{order.productName}</p>

                        <div className="text-sm mt-2 space-y-1">
                            <p><span className="font-semibold">Price:</span> ${order.price}</p>
                            <p><span className="font-semibold">Quantity:</span> {order.quantity}</p>
                            <p><span className="font-semibold">Phone:</span> {order.phone}</p>
                            <p><span className="font-semibold">Email:</span> {order.buyerEmail}</p>
                            <p><span className="font-semibold">Address:</span> {order.address}</p>
                            <p><span className="font-semibold">Date:</span> {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
