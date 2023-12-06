import React from 'react';

const events = [
  {
    name: "Event 1",
    language: "JavaScript",
    location: "New York",
    dateTime: "2023-12-10T08:00:00"
  },
  {
    name: "Event 2",
    language: "Python",
    location: "San Francisco",
    dateTime: "2023-12-15T10:30:00"
  },
  {
    name: "Event 3",
    language: "JavaScript",
    location: "London",
    dateTime: "2023-12-20T09:00:00"
  },
  // Add more events here...
];

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredEvents: [],
      languageFilter: "All",
      locationFilter: "All",
      dateTimeFilter: "All"
    };
  }

  componentDidMount() {
    this.setState({ filteredEvents: events });
  }

  handleFilter = (filterType, value) => {
    let filteredEvents = events;

    if (filterType === "language") {
      this.setState({ languageFilter: value });
      if (value !== "All") {
        filteredEvents = events.filter(event => event.language === value);
      }
    } else if (filterType === "location") {
      this.setState({ locationFilter: value });
      if (value !== "All") {
        filteredEvents = events.filter(event => event.location === value);
      }
    } else if (filterType === "dateTime") {
      this.setState({ dateTimeFilter: value });
      if (value !== "All") {
        // Implement filtering by date & time logic here
      // filteredEvents = events.filter(event => compareDates(event.dateTime, value));
      }
    }

    this.setState({ filteredEvents });
  };

  render() {
    const { filteredEvents } = this.state;

    const renderEvents = filteredEvents.map(event => (
      <li key={event.name}>{event.name} - {event.language} - {event.location} - {event.dateTime}</li>
    ));

    return (
      <div>
        <select onChange={e => this.handleFilter("language", e.target.value)}>
          <option value="All">All Languages</option>
          {/* Add options for languages based on available event languages */}
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
        </select>

        <select onChange={e => this.handleFilter("name", e.target.value)}>
          <option value="All">All Names</option>
          {/* Add options for event names based on available event names */}
          {/* Example: <option value="Event 1">Event 1</option> */}
        </select>

        <select onChange={e => this.handleFilter("location", e.target.value)}>
          <option value="All">All Locations</option>
          {/* Add options for locations based on available event locations */}
          <option value="London">London</option>
          <option value="San Francisco">San Francisco</option>
          <option value="New York">New York</option>
        </select>

        
        {/* Implement date & time filtering */}
        {/* Example: Date & Time filter input or dropdown */}

        <p>{renderEvents}</p>
        
      </div>
    );
  }
}


export default Filter;