// import React, { useState } from "react";

// const CreateEvent = ({ onAddEvent }) => {
//     const [newEvent, setNewEvent] = useState({
//         title: "",
//         description: "",
//         date: "",
//         image: "",
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onAddEvent(newEvent);
//         // You can optionally redirect to the EventPage here
//         setNewEvent({
//             title: "",
//             description: "",
//             date: "",
//             image: "",
//         });
//     };

//     return (
//         <div className="container mt-5">
//             <h1 className="mb-4">Create Event</h1>
//             <form onSubmit={handleSubmit}>
//                 {/* Input fields for event details */}
//                 <button type="submit" className="btn btn-primary">
//                     Create Event
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default CreateEvent;
