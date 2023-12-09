import React, { Component } from 'react';

class EventCreationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventLocation: '',
      dateTime: '',
      description: '',
      categories: {
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
        categories: {
          ...prevState.categories,
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
    const { eventName, location, date, description, categories } = this.state;
  
    // Construct an event object
    const newEvent = {
      name: eventName,
      location,
      date,
      description,
      category: Object.keys(categories).filter(lang => categories[lang]),
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
    const { eventName, eventLocation, dateTime, description, categories } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            name="eventName"
            value={eventName}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>

        <label>
          Event Location:
          <input
            type="text"
            name="eventLocation"
            value={eventLocation}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>

        <label>
          Date and Time:
          <input
            type="datetime-local"
            name="dateTime"
            value={dateTime}
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
          Categories:
          <label>
            <input
              type="checkbox"
              name="JavaScript"
              checked={categories.JavaScript}
              onChange={this.handleInputChange}
            />
            JavaScript
          </label>
          <label>
            <input
              type="checkbox"
              name="Python"
              checked={categories.Python}
              onChange={this.handleInputChange}
            />
            Python
          </label>
          <label>
            <input
              type="checkbox"
              name="Java"
              checked={categories.Java}
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