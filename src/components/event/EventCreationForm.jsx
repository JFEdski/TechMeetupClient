
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";


function EventCreationForm(){
  //const navigate = useNavigate();

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  
  async function createEvent(e){
    e.preventDefault();
    
    const response = await fetch("http://localhost:4000/events/event", {
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      method: "POST",
      body: JSON.stringify({
        eventName,
        date,
        description,
        category,
        location,
      })
    });
    
    //const results = await response.json();
    
    if (response.status === 200) {
      console.log("Successfully created event!")
    } else {
      console.error("Failed to create an event")
    }
    
  };
    return(
      <Form onSubmit={createEvent}>
      <Form.Group controlId="eventName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter event name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          />
      </Form.Group>
      <br/>
      <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          />
      <br/>
      <Form.Label>Date</Form.Label>
        <Form.Control
          type="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
         <Form.Label>Time</Form.Label>
        <Form.Control
          type="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br/>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
       

      <button variant="primary" type="submit">
        Create Event
      </button>
    </Form>
  )
}

export default EventCreationForm;