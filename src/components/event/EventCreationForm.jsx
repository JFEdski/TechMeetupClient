

import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function EventCreationForm({ token }) {
  const navigate = useNavigate();
  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  console.log('TOKEN', token)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('keith')

    const url = 'http://localhost:4000/events/event'
    let bodyObject = JSON.stringify({
      name,
      date,
      time,
      description,
      category,
      location
    })
    console.log(bodyObject.date)
    let myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Authorization', token)
    let requestOptions = { headers: myHeaders, body: bodyObject, method: 'POST' }
    try {
      const response = await fetch(url, requestOptions)
      const data = await response.json()
      console.log(data)
      navigate('/event')
      // navigate('/event')
    } catch (error) {
      console.log(error.message)

    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="eventName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter event name"
          value={name}
          onChange={(e) => setName(e.target.value)}

        />
      </Form.Group>
      <br />
      <Form.Label>Location</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
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
      <br />
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
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