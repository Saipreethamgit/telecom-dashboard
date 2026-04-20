import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function Billing() {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/dashboard/1")
            .then(res => setData(res.data));
    }, []);

    if (!data) return <h2 className="text-white p-10">Loading...</h2>;

    return (
        <div className="flex min-h-screen bg-black text-white">

            <Sidebar />

            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold mb-6">Billing</h1>

                <div className="bg-white text-black p-6 rounded-2xl shadow border space-y-4">
                    <p><strong>Amount:</strong> ${data.billAmount}</p>
                    <p><strong>Status:</strong> {data.billStatus}</p>
                </div>
            </div>

        </div>
    );
}

export default Billing;