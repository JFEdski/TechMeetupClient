import React, { useState } from 'react';
import FilterModal from '../filter/FilterModal';

const EventCard = ({ event }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <div className="event-container">
      <div className="event-item-container">
        <div className="event-img-container">
          {/* <img src="./images/img1.jpg" alt="Event image"/> */}
        </div>

        <div className="event-body-container">
          <div className="overlay"></div>

          <div className="event-info">
            <p className="event-title">{event.name}</p>
            <div className="separator"></div>
            <p className="event-info">{event.location}</p>
            <p className="price">Free</p>

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

          <button className="action" onClick={FilterModal()}>Register</button>

          {FilterModal(true) && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={FilterModal()}>&times;</span>
                <h2>Register for Event</h2>
                <p>Please log in or sign up to register for the event</p>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
                <button>Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;