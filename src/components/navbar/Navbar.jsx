import React from "react";
import { Link } from "react-router-dom";
// import './App.css'

const Nav = () => {
    return (

        <nav className="navbar">
            <h1 className="logo-text">Tech Meetup</h1>


            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/create">Create Event</Link>


        </nav >

    )
}
export default Nav;