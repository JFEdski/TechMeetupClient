import React from "react";
import Nav from "../navbar/Navbar";
import image from "../../assets/meetup1.jpg"

function EventDetails(props) {
  return (
    <>
    <div>
      <Nav />
      <header className="header-details">
        <h2 className="header-title">{props.name}</h2>
        <p className="header-host">Hosted By:{props.userName}</p>
      </header>
      <main className="main-details">
        <div className="content-details">
            <img src={image} alt="Event" className="image-details" />
            <h2 className="date-details">{props.date}</h2>
            <p className="description-details">{props.description}</p>
        </div>
      </main>
    </div>
    </>
  );
}

export default EventDetails;
