import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function Usage() {

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
                <h1 className="text-3xl font-bold mb-6">Usage</h1>

                <div className="bg-white text-black p-6 rounded-2xl shadow border space-y-4">
                    <p><strong>Data Used:</strong> {data.dataUsed} GB</p>
                    <p><strong>Calls:</strong> {data.callsUsed}</p>
                    <p><strong>SMS:</strong> {data.smsUsed}</p>
                </div>
            </div>

        </div>
    );
}

export default Usage;