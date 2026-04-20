import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChartBar, FaFileInvoice } from "react-icons/fa";

function Sidebar() {

    const location = useLocation();

    return (
        <div className="w-64 bg-white text-black p-6 flex flex-col justify-between">

            <div>
                <h2 className="text-2xl font-bold mb-8">Telecom</h2>

                <ul className="space-y-3">

                    <Link to="/">
                        <li className={`flex items-center gap-3 p-3 rounded-lg transition ${
                            location.pathname === "/"
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}>
                            <FaHome /> Dashboard
                        </li>
                    </Link>

                    <Link to="/usage">
                        <li className={`flex items-center gap-3 p-3 rounded-lg transition ${
                            location.pathname === "/usage"
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}>
                            <FaChartBar /> Usage
                        </li>
                    </Link>

                    <Link to="/billing">
                        <li className={`flex items-center gap-3 p-3 rounded-lg transition ${
                            location.pathname === "/billing"
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100"
                        }`}>
                            <FaFileInvoice /> Billing
                        </li>
                    </Link>

                </ul>
            </div>

            <button
                className="border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
                onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                }}
            >
                Logout
            </button>

        </div>
    );
}

export default Sidebar;