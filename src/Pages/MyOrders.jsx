import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";   // ✅ correct import

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get(`https://p10-paw-mart-backend.vercel.app/orders`)
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDownloadPDF = () => {
        if (!orders || orders.length === 0) {
            alert("No orders found!");
            return;
        }

        const doc = new jsPDF("landscape");

        doc.setFontSize(18);
        doc.text("PawMart - My Orders Report", 14, 15);

        doc.setFontSize(10);
        doc.text("Generated on: " + new Date().toLocaleString(), 14, 22);

        const tableColumn = [
            "#",
            "Product Name",
            "Price",
            "Qty",
            "Phone",
            "Email",
            "Address",
            "Order Date",
        ];

        const tableRows = orders.map((order, index) => [
            index + 1,
            order.productName || "N/A",
            `$${order.price}`,
            order.quantity,
            order.phone,
            order.buyerEmail,
            order.address,
            new Date(order.date).toLocaleString(),
        ]);

        // ✅ Correct call
        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 30,
            styles: { fontSize: 9 },
            theme: "striped",
            headStyles: { fillColor: [59, 2, 112] },
        });

        doc.save("PawMart_MyOrders_Report.pdf");
    };


    return (
        <div className="min-h-[70vh] max-w-7xl mx-auto p-2 my-5 animate__animated animate__zoomIn">

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold mb-5 text-center">My Orders</h1>

                <div className="flex justify-end w-full my-4">
                    <button
                        onClick={handleDownloadPDF}
                        className="btn btn-primary bg-[#3B0270] text-white px-6 py-2 rounded-lg shadow hover:bg-purple-900 transition-all"
                    >
                        Download Report
                    </button>
                </div>
            </div>

            {/* ---------- Desktop Table ---------- */}
            <div className="hidden md:block overflow-x-auto">
                <table className="table w-full bg-[#f3e9fc]">
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
                                <td>{order.productName}</td>
                                <td>${order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.phone}</td>
                                <td>{order.buyerEmail}</td>
                                <td>{order.address}</td>
                                <td>
                                    {new Date(order.date).toLocaleString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ---------- Mobile Cards ---------- */}
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
