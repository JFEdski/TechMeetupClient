import React from "react";
import { Link } from "react-router-dom";
import meetup from "../../assets/meetup1.jpg";

const Nav = ({ token, clearToken }) => {
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
            {
                !token
                ?
            <Link to="/auth" className="nav-link">Login/Signup</Link>
            :
            <Link onClick={clearToken} to="/">Log Out</Link>
            }
            <Link to="/event" className="nav-link">Events</Link>

            {/* Took the create the events from the navbar for now since a user is the only one able to create the a event */}
            <Link to="/create" className="nav-link">Create Event</Link>

       


        </nav>
    )
}
export default Nav;