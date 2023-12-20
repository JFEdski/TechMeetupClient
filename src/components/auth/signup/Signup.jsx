import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Signup({ setToken }) {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(e) {
        e.preventDefault()

        const response = await fetch("http://localhost:4000/user/signup", {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'POST',
            body: JSON.stringify({
                userName,
                firstName,
                lastName,
                email,
                password
            })
        });
        const results = await response.json();
        console.log(response.status);
        console.log(results);
        // setToken(results.token, results.user._id);

        if (response.status === 200) {
            if (results.user && results.user._id) {
                setToken(results.token, results.user._id);
                navigate('/');
            } else {
                console.error('User data is missing in the response');
            }
        } else {
            console.error('Signup Failed');
        }
    }


    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
            <div className="form-container p-5 rounded bg-white">
                <Form onSubmit={registerUser}>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="mb-2">
                        <label htmlFor="lname">User Name</label>
                        <input
                            type="text"
                            placeholder="Enter User Name"
                            className="form-control"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="fname">First name</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lname">Last name</label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
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
                        <button type="submit" className="btn btn-primary mb-4">Sign up</button>
                        Already Registered ? <Link to="/login" style={{ marginBottom: 10 }}>Sign in</Link>
                    </div>
                </Form>
            </div>
        </div>

    )
}

export default Signup