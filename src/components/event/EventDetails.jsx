import React from "react";
import Nav from "../navbar/Navbar";
import image from "../../assets/meetup1.jpg"
import { useParams } from 'react-router-dom'

function EventDetails({ name, userName, date, description }) {
  const { id } = useParams();

  return (
    <>
    <div className="container-details">
      <Nav />
      <header className="header-details">
        <h2 className="header-title">{name}</h2>
        <p className="header-host">Hosted By:{userName}</p>
      </header>
      <main className="main-details">
        <div className="content-details">
            <img src={image} alt="Event" className="image-details" />
            <h2 className="date-details">{date}</h2>
            <p className="description-details">{description}</p>
        </div>
      </main>
    </div>
    </>
  );
}
  
  
export default EventDetails;
  