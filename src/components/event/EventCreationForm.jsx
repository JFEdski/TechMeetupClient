import React, { Component } from 'react';
import EventDetails from './EventDetails';

class EventCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      date: '',
      time: '',
      description: '',
      category: {
        JavaScript: false,
        Python: false,
        Java: false,
        // Add other languages eventually
      }
    };
  }

  handleInputChange = event => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      this.setState(prevState => ({
        category: {
          ...prevState.category,
          [name]: checked,
        }
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
  
    // Extract form data from the state
    const { name, location, date, time, description, category } = this.state;
  
    // Construct an event object
    const newEvent = {
      name: name,
      location,
      date,
      time,
      description,
      category: Object.keys(category).filter(lang => category[lang]),
    };
  
    try {
      // Make an API request to create the event
      const response = await fetch('http://localhost:4000/events/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });
  
      if (response.ok) {
        // Event created successfully
        console.log('Event created successfully!');
        // Optionally, reset the form fields or do something else on success
      } else {
        console.error('Failed to create event.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  render() {
    const { name, location, date, time, description, category } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>

        <label>
          Event Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>

        <label>
          Date:
          <input
            type="date-local"
            name="date"
            value={date}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>

        <label>
          Time:
          <input
            type="time-local"
            name="time"
            value={time}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>

        <label>
          Description:
          <textarea
            name="description"
            value={description}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>

        <label>
          category:
          <label>
            <input
              type="checkbox"
              name="JavaScript"
              checked={category.JavaScript}
              onChange={this.handleInputChange}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              name="Python"
              checked={category.Python}
              onChange={this.handleInputChange}
            />
            Python
          </label>
          <label>
            <input
              type="checkbox"
              name="Java"
              checked={category.Java}
              onChange={this.handleInputChange}
            />
            Java
          </label>
          {/* Add more checkboxes for other languages */}
        </label>
        <br/>

        <button type="submit">Create Event</button>
      </form>
    );
  }
}

export default EventCreationForm;