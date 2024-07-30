/*

Auftrag:
"Bestenfalls per SSO über die peemdomain"
-> per react sehr schwer @Paul und @David Kohlweg oder Paulus fragen ob das überhaupt geht

-> antwort: zu spät gefragt, hätte zu lange gedauert -> kann jonas beim praktikum maybe tryen

-_-

 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../src/stylesheets/Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/user/login', { username, password });
            const token = response.data.token;
            localStorage.setItem('authToken', token);
            navigate('/mainpage');
        } catch (error: any) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="all">
            <img className="logo-schaefer"
                 src={process.env.PUBLIC_URL + "/assets/logo-ssi-schaefer-svg-data.png"} alt="SSI Schaefer Logo"/>
            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        className={`input-field ${error ? 'input-error' : ''}`}
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className={`input-field ${error ? 'input-error' : ''}`}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
            <div className="footer">
                <div className="motto">Think Tomorrow</div>
            </div>
        </div>
    );
};

export default Login;
