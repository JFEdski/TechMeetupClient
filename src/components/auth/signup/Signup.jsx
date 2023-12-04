import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

function Signup() {
    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary" >
            <div className="form-container p-5 rounded bg-white">
                <Form>
                    <h3 className="text-center">Sign Up</h3>
                    <div className="mb-2">
                        <label htmlFor="fname">First name</label>
                        <input type="text" placeholder="Enter First Name" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lname">Last name</label>
                        <input type="text" placeholder="Enter Last Name" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="Email">Email</label>
                        <input type="text" placeholder="Enter Last Name" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary mb-4">Sign in</button>
                        Already Registered ? <Link to="/login" style={{ marginBottom: 10 }}>Sign in</Link>
                    </div>
                </Form>
            </div>
        </div>


    )
}

export default Signup