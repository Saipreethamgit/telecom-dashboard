import React, { useState } from "react";
import axios from "axios";

function Login({ setToken }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        axios.post("http://localhost:8080/api/auth/login", {
            email,
            password
        })
            .then(res => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.userId);

                window.location.reload(); // go to dashboard
            })
            .catch(err => console.error(err));
    }; // ✅ IMPORTANT: function closed here

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>🔐 Login</h2>

            <input
                type="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
            /><br /><br />

            <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            /><br /><br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;