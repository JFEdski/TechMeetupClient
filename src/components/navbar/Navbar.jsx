import React from "react";
import { Link } from "react-router-dom";
import meetup from "../../assets/meetup1.jpg";

const Nav = () => {
    return (

        // <nav className="navbar">
        //     <h1 className="logo-text">Tech Meetup</h1>


        //     <Link to="/login">Login</Link>
        //     <Link to="/signup">Signup</Link>
        //     <Link to="/create">Create Event</Link>
        // </nav >
        <nav className="navbar">
            <Link to="/">
                <img src={meetup} alt="Tech Meetup" className="logo" />
            </Link>

            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/create" className="nav-link">Create Event</Link>
            <Link to="/filter" className="nav-link">Find Events</Link>


        </nav>
    )
}
export default Nav;