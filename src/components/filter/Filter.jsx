import React, { useState, useEffect } from 'react';
import EventCard from '../event/EventCard';

const events = [
  {
    name: "Event 1",
    language: "JavaScript",
    location: "New York",
    dateTime: "2023-12-10T08:00:00",
    description: "description"
  },
  {
    name: "Event 2",
    language: "Python",
    location: "San Francisco",
    dateTime: "2023-12-15T10:30:00",
    description: "description"
  },
  {
    name: "Event 3",
    language: "JavaScript",
    location: "London",
    dateTime: "2023-12-20T09:00:00",
    description: "description"
  },
  {
    name: "Event 4",
    language: "JavaScript",
    location: "Quebec",
    dateTime: "2023-12-20T09:00:00",
    description: "description"
  }
];

const Filter = () => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [languageFilter, setLanguageFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [dateTimeFilter, setDateTimeFilter] = useState("All");

  useEffect(() => {
    setFilteredEvents(events);
  }, []);

  const handleFilter = (filterType, value) => {
    let filteredEvents = events;

    if (filterType === "language") {
      setLanguageFilter(value);
      if (value !== "All") {
        filteredEvents = events.filter(event => event.language === value);
      }
    } else if (filterType === "location") {
      setLocationFilter(value);
      if (value !== "All") {
        filteredEvents = events.filter(event => event.location === value);
      }
    } else if (filterType === "dateTime") {
      setDateTimeFilter(value);
      if (value !== "All") {
        // Implement filtering by date & time logic here
        // filteredEvents = events.filter(event => compareDates(event.dateTime, value));
      }
    }

    setFilteredEvents(filteredEvents);
  };

  const renderEvents = filteredEvents.map(event => (
    <div key={event.name}>
      <EventCard key={`card-${event.name}`} event={event} />
    </div>
  ));

  return (
    <div>
      <select onChange={e => handleFilter("language", e.target.value)}>
        <option value="All">All Languages</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      <select onChange={e => handleFilter("name", e.target.value)}>
        <option value="All">All Names</option>
        {/* Add options for event names based on available event names */}
        {/* Example: <option value="Event 1">Event 1</option> */}
      </select>

      <select onChange={e => handleFilter("location", e.target.value)}>
        <option value="All">All Locations</option>
        <option value="London">London</option>
        <option value="San Francisco">San Francisco</option>
        <option value="New York">New York</option>
      </select>

      {/* Implement date & time filtering */}
      {/* Example: Date & Time filter input or dropdown */}

      <p style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>{renderEvents}</p>
    </div>
  );
};

export default Filter;



// class Filter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       filteredEvents: [],
//       languageFilter: "All",
//       locationFilter: "All",
//       events: [] // To store fetched events
//     };
//   }

//   componentDidMount() {
//     // Fetch events from your API when the component mounts
//     fetch('http://localhost:4000/events/event')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ events: data, filteredEvents: data });
//       })
//       .catch(error => console.error('Error fetching events:', error));
//   }

//   handleFilter = (filterType, value) => {
//     const { events } = this.state;

//     let filteredEvents = events;

//     if (filterType === "category") {
//       this.setState({ languageFilter: value });
//       if (value !== "All") {
//         filteredEvents = events.filter(event => event.language === value);
//       }
//     } else if (filterType === "location") {
//       this.setState({ locationFilter: value });
//       if (value !== "All") {
//         filteredEvents = events.filter(event => event.location === value);
//       }
//     }


//     this.setState({ filteredEvents });
//   };

//   render() {
//     const { filteredEvents } = this.state;

//     const renderEvents = filteredEvents.map(event => (
//       <div key={event.name}>
//         <EventCard key={`card-${event.name}`} event={event} />
//       </div>
//     ));

//     return (
//       <div>
//         <select onChange={e => this.handleFilter("language", e.target.value)}>
//           <option value="All">All Languages</option>
//           <option value="Python">Python</option>
//           <option value="JavaScript">JavaScript</option>
//         </select>

//         {/* Add other select elements for different filters (e.g., name, location, dateTime) */}

//         <p style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
//           {renderEvents}
//         </p>
//       </div>
//     );
//   }
// }

// export default Filter;

