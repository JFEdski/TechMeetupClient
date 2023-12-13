// // import React, { useState, useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css"
// // // import CreateEvent from "./CreateEvent";


// // function EventPage() {

// //     const events = [{
// //         title: "Event 1",
// //         description: "Description of event 1",
// //         date: "2023-05-01",
// //         time: "8:00 AM - 9:00 PM",
// //     },
// //     {
// //         title: "Event 1",
// //         description: "Description of event 1",
// //         date: "2023-05-01",
// //         image: "https://example.com/event1.jpg",
// //         time: "8:00 AM - 9:00 PM",
// //     },
// //     ]
// //     console.log('Events Array:', events);


// //     return (
// //         <div className="container mt-5">
// //             <h1 className="mb-4">Upcoming Events</h1>
// //             <div className="card-deck">
// //                 {events.map((event, index) => (
// //                     <div key={index} className="card">
// //                         <img src={event.image} className="card-img-top" alt={event.name} />
// //                         <div className="card-body">
// //                             <h5 className="card-title">{event.title}</h5>
// //                             <p className="card-text">{event.description}</p>
// //                             <p className="card-text">
// //                                 <small className="text-muted">Date: {event.date}</small>
// //                                 <br></br>
// //                                 <small className="text-muted">Time: {event.time}</small>
// //                             </p>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default EventPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

// const EventRegistration = ({ eventId }) => {
//     const navigate = useNavigate();
//     const [registrationSuccess, setRegistrationSuccess] = useState(false);

//     const handleRegister = async () => {
//         try {
//             // Make your API call to register the user for the event
//             const response = await fetch(`event/register/${eventId}`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json",
//                     // Include any additional headers if needed
//                 },
//                 credentials: "include", // Include this if you are using cookies for authentication
//             });

//             if (!response.ok) {
//                 throw new Error(`Failed to register for the event (status ${response.status})`);
//             }

//             // If the registration is successful, update state
//             setRegistrationSuccess(true);
//             navigate(`/event/${eventId}`)
//             // No need to redirect here; the EventDetail component will handle it
//         } catch (error) {
//             console.error("Error registering for the event:", error);
//             // Handle error as needed
//         }
//     };

//     return (
//         <div>
//             {registrationSuccess ? (
//                 <p>Registration successful! Redirecting to event details...</p>
//             ) : (
//                 <button onClick={handleRegister}>Register for Event</button>
//             )}
//         </div>
//     );
// };

// export default EventRegistration;
import { useParams } from 'react-router-dom';

const EventRegistration = () => {
    const { eventId } = useParams();

    // Use eventId to fetch event details or perform other actions

    return (
        <div>
            {/* Your EventRegistration component content */}
            <h1>Event Registration</h1>
            <p>Event ID: {eventId}</p>
        </div>
    );
};

export default EventRegistration;
