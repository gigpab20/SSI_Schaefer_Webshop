import React, {useState} from 'react';
import '../stylesheets/Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (username === 'admin' && password === '1234') {
            navigate("/mainpage");
        }
    };

    return (
        <div className={"all"}>
            <img className={"logo-schaefer"}
                 src={process.env.PUBLIC_URL + "/assets/logo-ssi-schaefer-svg-data.png"} alt="SSI Schaefer Logo"/>


            <form onSubmit={handleSubmit} className={"login-container"}>
                <div>
                <p className={"text"}>Sign in:</p>
                    <input
                        className={"input-field"}
                        type="text"
                        id="username"
                        placeholder={"Username"}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <input className={"input-field"}
                        type="password"
                        id="password"
                        placeholder={"Password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button className={"login-button"} type="submit">Log in</button>
            </form>

            <div className={"footer"}>
                <div className={"motto"}>Think Tomorrow</div>

            </div>
        </div>
    );
};

export default Login;
