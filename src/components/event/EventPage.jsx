import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
// import CreateEvent from "./CreateEvent";


function EventPage() {

    const events = [{
        title: "Event 1",
        description: "Description of event 1",
        date: "2023-05-01",
        time: "8:00 AM - 9:00 PM",
    },
    {
        title: "Event 1",
        description: "Description of event 1",
        date: "2023-05-01",
        image: "https://example.com/event1.jpg",
        time: "8:00 AM - 9:00 PM",
    },
    ]
    console.log('Events Array:', events);


    return (
        <div className="container mt-5">
            <h1 className="mb-4">Upcoming Events</h1>
            <div className="card-deck">
                {events.map((event, index) => (
                    <div key={index} className="card">
                        <img src={event.image} className="card-img-top" alt={event.name} />
                        <div className="card-body">
                            <h5 className="card-title">{event.title}</h5>
                            <p className="card-text">{event.description}</p>
                            <p className="card-text">
                                <small className="text-muted">Date: {event.date}</small>
                                <br></br>
                                <small className="text-muted">Time: {event.time}</small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventPage;


