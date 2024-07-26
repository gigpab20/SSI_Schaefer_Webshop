import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../src/stylesheets/Login.css';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        console.log("Token from URL:", token); // Debugging-Log

        if (token) {
            localStorage.setItem('authToken', token);
            console.log("Token saved to localStorage:", localStorage.getItem('authToken')); // Debugging-Log
            navigate('/mainpage');
        }
    }, [navigate]);

    const handleLogin = () => {
        window.location.href = 'http://localhost:3002/auth/google'; // Aktualisiert auf Port 3002
    };

    return (
        <div className="all">
            <img className="logo-schaefer"
                 src={process.env.PUBLIC_URL + "/assets/logo-ssi-schaefer-svg-data.png"} alt="SSI Schaefer Logo"/>
            <div className="login-container">
                <button className="login-button" onClick={handleLogin}>Log in with Google</button>
            </div>
            <div className="footer">
                <div className="motto">Think Tomorrow</div>
            </div>
        </div>
    );
};

export default Login;
