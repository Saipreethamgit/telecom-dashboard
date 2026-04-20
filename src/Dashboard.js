import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

function Dashboard() {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/dashboard/1")
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <div className="animate-pulse text-xl">Loading dashboard...</div>
            </div>
        );
    }

    const lineData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Usage Trend",
                data: [
                    data.dataUsed * 0.3,
                    data.dataUsed * 0.6,
                    data.dataUsed * 0.8,
                    data.dataUsed
                ],
                borderColor: "#000",
                backgroundColor: "rgba(0,0,0,0.1)",
                tension: 0.4,
                fill: true,
                pointBackgroundColor: "#000",
                pointRadius: 5
            }
        ]
    };


    const lineOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#000",
                titleColor: "#fff",
                bodyColor: "#fff"
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#666" }
            },
            y: {
                grid: { color: "#e5e5e5" },
                ticks: { color: "#666" }
            }
        }
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8">

                {/* Top Navbar */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>

                    <div className="flex items-center gap-4">
            <span className="text-gray-400">
              Welcome, {data.customerName}
            </span>

                        <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full font-bold">
                            {data.customerName?.charAt(0)}
                        </div>
                    </div>
                </div>

                {/* Customer Card */}
                <div className="bg-white/90 backdrop-blur-md text-black p-6 rounded-2xl mb-6 shadow-lg border">
                    <h2 className="text-xl font-semibold tracking-wide">{data.customerName}</h2>
                    <p className="text-gray-600">Plan: {data.planName}</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                    <div className="bg-white text-black p-6 rounded-2xl border hover:shadow-xl transition">
                        <p className="text-gray-500">Data Used</p>
                        <h2 className="text-3xl font-bold">{data.dataUsed} GB</h2>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white text-black p-6 rounded-2xl border transition"
                    >
                        <p className="text-gray-500">Data Used</p>
                        <h2 className="text-3xl font-bold">{data.dataUsed} GB</h2>
                    </motion.div>

                    <div className="bg-white text-black p-6 rounded-2xl border hover:shadow-xl transition">
                        <p className="text-gray-500">Calls</p>
                        <h2 className="text-3xl font-bold">{data.callsUsed}</h2>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white text-black p-6 rounded-2xl border transition"
                    >
                        <p className="text-gray-500">Data Used</p>
                        <h2 className="text-3xl font-bold">{data.dataUsed} GB</h2>
                    </motion.div>

                    <div className="bg-white text-black p-6 rounded-2xl border hover:shadow-xl transition">
                        <p className="text-gray-500">SMS</p>
                        <h2 className="text-3xl font-bold">{data.smsUsed}</h2>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white text-black p-6 rounded-2xl border transition"
                    >
                        <p className="text-gray-500">Data Used</p>
                        <h2 className="text-3xl font-bold">{data.dataUsed} GB</h2>
                    </motion.div>

                </div>

                {/* Billing */}
                <div className="bg-white text-black p-6 rounded-2xl border shadow-sm mb-6">
                    <h3 className="text-lg font-semibold mb-3">Billing Overview</h3>

                    <div className="flex justify-between">
                        <span>Amount</span>
                        <span className="font-bold">${data.billAmount}</span>
                    </div>

                    <div className="flex justify-between mt-2">
                        <span>Status</span>
                        <span className="px-3 py-1 rounded-full text-sm bg-black text-white">
  {data.billStatus}
</span>
                    </div>
                </div>


                <div className="bg-white p-6 rounded-2xl border shadow-lg hover:shadow-xl transition">
                    <h3 className="text-lg font-semibold mb-4 text-black">
                        Usage Trend
                    </h3>

                    <Line data={lineData} options={lineOptions} />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;