// // import React from "react";
// // import Nav from "../navbar/Navbar";
// // import image from "../../assets/meetup1.jpg"
// // import { useParams } from 'react-router-dom'

// // function EventDetails({ name, userName, date, description }) {
// //   const { id } = useParams();

// //   return (
// //     <>
// //       <div className="container-details">
// //         <Nav />
// //         <header className="header-details">
// //           <h2 className="header-title">{name}</h2>
// //           <p className="header-host">Hosted By:{userName}</p>
// //         </header>
// //         <main className="main-details">
// //           <div className="content-details">
// //             <img src={image} alt="Event" className="image-details" />
// //             <h2 className="date-details">{date}</h2>
// //             <p className="description-details">{description}</p>
// //           </div>
// //         </main>
// //       </div>
// //     </>
// //   );
// // }


// // export default EventDetails;
// import React, { useEffect, useState } from "react";
// import Nav from "../navbar/Navbar";
// import image from "../../assets/meetup1.jpg";
// import { useParams } from "react-router-dom";

// function EventDetails() {
//   const { id } = useParams();
//   const [eventDetails, setEventDetails] = useState({});

//   useEffect(() => {
//     // Fetch event details based on the id parameter
//     fetch(`http://localhost:4000/events/${id}`)
//       .then((response) => response.json())
//       .then((data) => setEventDetails(data))
//       .catch((error) => console.error("Error fetching event details:", error));
//   }, [id]);

//   const { name, userName, date, description } = eventDetails;

//   return (
//     <>
//       <div className="container-details">
//         <Nav />
//         <header className="header-details">
//           <h2 className="header-title">{name}</h2>
//           <p className="header-host">Hosted By: {userName}</p>
//         </header>
//         <main className="main-details">
//           <div className="content-details">
//             <img src={image} alt="Event" className="image-details" />
//             <h2 className="date-details">{date}</h2>
//             <p className="description-details">{description}</p>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }

// export default EventDetails;
import React, { useEffect, useState, Link } from "react";
import { useParams } from "react-router-dom";


const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/events/event/${id}`);

        if (!response.ok) {
          throw new Error(`Error fetching event details (status ${response.status})`);
        }

        const data = await response.json();
        setEvent(data.found);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <div className="container mt-5">
      <div className="card" >
        <img src="\img\meetup.webp" className="card-img-top" alt="Event"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Date:</strong> {event.date}</li>
          <li className="list-group-item"><strong>Time:</strong> {event.time}</li>
          <li className="list-group-item"><strong>Category:</strong> {event.category}</li>
          <li className="list-group-item"><strong>Location:</strong> {event.location}</li>
          {/* <li className="list-group-item"><strong>Owner:</strong> {event.owner}</li> */}
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-primary">Register</a>
        </div>
        {/* <div className="card-body">
          <Link to={`/event/register/${event._id}`} className="btn btn-primary">
            Register
          </Link>
        </div> */}

      </div>
    </div>
  );
};
// <div>
//     //   <h2>Event Details</h2>
//     //   <p>Event ID: {id}</p>
//     //   {event && (
//     //     <div>
//     //       {/* <p>Event Name: {event.name}</p> */}
//     //       <p>Date: {event.date}</p>
//     //       <p>Time: {event.time}</p>
//     //       <p>Description: {event.description}</p>
//     //       <p>Category: {event.category}</p>
//     //       <p>Location: {event.location}</p>
//     //       {/* <p>Owner: {event.owner}</p> */}
//     //       {/* Add other details as needed */}
//     //     </div>
//     //   )}
//     // </div>

//   );
// };

export default EventDetails;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

// const EventRegistration = ({ eventId }) => {
//   const navigate = useNavigate();
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const handleRegister = async () => {
//     try {
//       // Make your API call to register the user for the event
//       const response = await fetch(`/api/event/register/${eventId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           // Include any additional headers if needed
//         },
//         credentials: "include", // Include this if you are using cookies for authentication
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to register for the event (status ${response.status})`);
//       }

//       // If the registration is successful, update state
//       setRegistrationSuccess(true);


//       // No need to redirect here; the EventDetail component will handle it
//     } catch (error) {
//       console.error("Error registering for the event:", error);
//       // Handle error as needed
//     }
//   };

//   return (
//     <div>
//       {registrationSuccess ? (
//         <p>Registration successful! Redirecting to event details...</p>
//       ) : (
//         <button onClick={handleRegister}>Register for Event</button>
//       )}
//     </div>
//   );
// };

// export default EventRegistration;
