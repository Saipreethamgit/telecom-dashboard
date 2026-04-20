import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Usage from "./Usage";
import Billing from "./Billing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    const [token, setToken] = useState(localStorage.getItem("token"));

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/usage" element={<Usage />} />
                <Route path="/billing" element={<Billing />} />
            </Routes>
        </Router>
    );
}

export default App;