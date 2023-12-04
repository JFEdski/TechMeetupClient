import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg"


function Home() {
    const containerStyle = {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',


    }
    const buttonStyle = {
        display: 'inline-block',
        padding: '5px 20px',
        fontSize: '16px',
        backgroundColor: 'white',
        color: 'black',
        textDecoration: 'none',
        borderRadius: '5px',
        marginTop: '10px',

    }

    return (
        <div style={containerStyle}>
            <h1>Welcome to the Tech Meetup</h1>
            <div className="home-main" >
                <section className="head-events">
                    <h3 style={{ fontSize: "30px" }}>Your Events</h3>
                    <Link to='/create' style={buttonStyle} > Create new event</Link>
                </section>
            </div>
        </div>
    );
}

export default Home;