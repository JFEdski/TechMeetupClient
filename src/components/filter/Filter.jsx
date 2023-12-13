import React, { useState, useEffect } from "react";
import EventCard from "../event/EventCard";

const Filter = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("All");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [dateOptions, setDateOptions] = useState([]);
  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:4000/events/list')
      .then((response) => response.json())
      .then((data) => {
        //data=data.found
        console.log({data})
        setFilteredEvents(data.found);

        const categories = Array.from(
          new Set(data.map((event) => event.category))
        );
        const locations = Array.from(
          new Set(data.map((event) => event.location))
        );
        const dates = Array.from(new Set(data.map((event) => event.date)));
        const times = Array.from(new Set(data.map((event) => event.time)));

        setCategoryOptions(["All", ...categories]);
        setLocationOptions(["All", ...locations]);
        setDateOptions(["All", ...dates]);
        setTimeOptions(["All", ...times]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFilter = (filterType, value) => {
    if (value === "All") {
      switch (filterType) {
        case "category":
          setCategoryFilter("All");
          break;
        case "location":
          setLocationFilter("All");
          break;
        case "date":
          setDateFilter("All");
          break;
        case "time":
          setTimeFilter("All");
          break;
        default:
          break;
      }
      // setFilteredEvents(filteredEvents); // Reset events to all when "All" is selected

    } else {
      switch (filterType) {
        case "category":
          setCategoryFilter(value);
          break;
        case "location":
          setLocationFilter(value);
          break;
        case "date":
          setDateFilter(value);
          break;
        case "time":
          setTimeFilter(value);
          break;
        default:
          break;
      }
      

      const updatedFilteredEvents = filteredEvents(filterType, value);
      //setFilteredEvents(updatedFilteredEvents);

    }
  };

  const renderEvents = [];
  for (let i = 0; i < filteredEvents.length; i++) {
    const event = filteredEvents[i];
    renderEvents.push(
      <div key={event.name}>
        <EventCard key={`card-${event.name}`} event={event} />
      </div>
    );
  }

  return (
    <div>
      {/* <select onChange={(e) => handleFilter("category", e.target.value)}>

        {categoryOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select onChange={(e) => handleFilter("location", e.target.value)}>
        {locationOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select onChange={(e) => handleFilter("date", e.target.value)}>
        {dateOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select onChange={(e) => handleFilter("time", e.target.value)}>
        {timeOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select> */}

      <div

        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filteredEvents.map((event, index) => {
          console.log({event})
          return (
            <EventCard event={event} key={index}/>
          )
        })}
      </div>

    </div>
  );
};

export default Filter;

//import React from 'react';

// import EventCard from '../event/EventCard';
// //import EventMap from '../map/EventMap';

// const events = fetch('http://localhost:4000/events/event')

// class Filter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       filteredEvents: [],
//       categoryFilter: "All",
//       locationFilter: "All",
//       dateTimeFilter: "All"
//     };
//   }

//   componentDidMount() {
//     this.setState({ filteredEvents: events });
//   }

//   handleFilter = (filterType, value) => {
//     let filteredEvents = events;

//     if (filterType === "language") {
//       this.setState({ languageFilter: value });
//       if (value !== "All") {
//         filteredEvents = events.filter(event => event.language === value);
//       }
//     } else if (filterType === "location") {
//       this.setState({ locationFilter: value });
//       if (value !== "All") {
//         filteredEvents = events.filter(event => event.location === value);
//       }
//     } else if (filterType === "dateTime") {
//       this.setState({ dateTimeFilter: value });
//       if (value !== "All") {
//         // Implement filtering by date & time logic here
//       // filteredEvents = events.filter(event => compareDates(event.dateTime, value));
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
//           <option value="All">All Cateogries</option>
//           {/* Add options for languages based on available event languages */}
//           <option value="Python">Python</option>
//           <option value="JavaScript">JavaScript</option>
//         </select>

//         <select onChange={e => this.handleFilter("name", e.target.value)}>
//           <option value="All">All Names</option>
//           {/* Add options for event names based on available event names */}
//           {/* Example: <option value="Event 1">Event 1</option> */}
//         </select>

//         <select onChange={e => this.handleFilter("location", e.target.value)}>
//           <option value="All">All Locations</option>
//           {/* Add options for locations based on available event locations */}
//           <option value="London">London</option>
//           <option value="San Francisco">San Francisco</option>
//           <option value="New York">New York</option>
//         </select>

//         {/* Implement date & time filtering */}
//         {/* Example: Date & Time filter input or dropdown */}

//         <p style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>{renderEvents}</p>

//       </div>
//     );
//   }
// }

// export default Filter;

