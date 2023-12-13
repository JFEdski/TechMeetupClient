import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import EventDetails from './EventDetails';

const EventCard = ({ event }) => {
  useEffect(() => {
    console.log(event)
  }, []);
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("The events:", events)
    // Fetch event data from your backend when the component mounts
    fetch('http://localhost:4000/events/list')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return(
    <div className="event-container" to={<EventDetails/>}>
      <div className="event-item-container">
        <div className="event-img-container">
          {/* <img src="./images/img1.jpg" alt="Event image"/> */}
        </div>

        <div className="event-body-container">
          <div className="overlay"></div>

          <div className="event-info">
            <div className="separator"></div>
            <p className="event-title">{event.name}</p>
            <p className="event-info">{event.location}</p>
            {/* <p className="price">Free</p> */}

            <div className="additional-info">
              <p className="event-info">
                <i className="fas fa-map-marker-alt"></i>
                {event.language}
              </p>
              <p className="event-info">
                <i className="far fa-calendar-alt"></i>
                {event.dateTime}
              </p>
              <p className="info description">
                {event.description}
              </p>
            </div>
          </div>

          <Link to={EventDetails}>
          <button className="action" onClick={EventDetails}>Register</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default EventCard;