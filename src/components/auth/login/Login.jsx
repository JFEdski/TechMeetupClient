import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




function Login({ setToken }) {


    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/user/login", {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        });

        const results = await response.json();
        console.log(response.status);
        console.log(results);
        setToken(results.token, results.user._id);
        if (response.status === 200) {
            if (results.user && results.user._id) {
                setToken(results.token, results.user._id);
                navigate('/');
            }

            else {
                console.error('User data is missing in the response')
            }
        } else {
            console.error('Login Failded')

        }
    }

    return (


        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary" >
            <div className="form-container p-5 rounded bg-white">
                <Form onSubmit={loginUser}>
                    <h3 className="text-center">Login</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary mb-4">Submit</button>
                        <Link to="/signup" style={{ marginBottom: 10 }}>Signup</Link>
                    </div>
                </Form>
            </div>
        </div>
    )

}

export default Login;