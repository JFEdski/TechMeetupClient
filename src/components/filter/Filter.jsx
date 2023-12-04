import React, { useState } from 'react'; 

  

const EventFilter = ({ events }) => { 

  const [filters, setFilters] = useState({ 

    time: '', 

    location: '', 

    date: '', 

    hashtag: '', 

    language: ", 

  }); 

  

  const filteredEvents = events.filter(event => { 

    const timeMatch = !filters.time || event.time === filters.time; 

    const locationMatch = !filters.location || event.location === filters.location; 

    const dateMatch = !filters.date || event.date === filters.date; 

    const hashtagMatch = 

      !filters.hashtag || 

      event.hashtags.some(hashtag => hashtag.toLowerCase() === filters.hashtag.toLowerCase()); 

    const languageMatch = !filters.language || event.language === filters.language; 

  

    return timeMatch && locationMatch && dateMatch && hashtagMatch && languageMatch; 

  }); 

  

  const handleFilterChange = (filterType, value) => { 

    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value })); 

  }; 

  

  return ( 

    <div> 

      <label> 

        Time: 

        <input 

          type="text" 

          value={filters.time} 

          onChange={e => handleFilterChange('time', e.target.value)} 

        /> 

      </label> 

      <label> 

        Location: 

        <input 

          type="text" 

          value={filters.location} 

          onChange={e => handleFilterChange('location', e.target.value)} 

        /> 

      </label> 

      <label> 

        Date: 

        <input 

          type="text" 

          value={filters.date} 

          onChange={e => handleFilterChange('date', e.target.value)} 

        /> 

      </label> 

      <label> 

        Hashtag: 

        <input 

          type="text" 

          value={filters.hashtag} 

          onChange={e => handleFilterChange('hashtag', e.target.value)} 

        /> 

      </label> 

      <label> 

        Language: 

        <input 

          type="text" 

          value={filters.language} 

          onChange={e => handleFilterChange('language', e.target.value)} 

        /> 

      </label> 

  

      <ul> 

        {filteredEvents.map(event => ( 

          <li key={event.id}> 

            {event.name} - {event.location} - {event.date} - {event.time} - {event.hashtags.join(', ')} - {event.language} 

          </li> 

        ))} 

      </ul> 

    </div> 

  ); 

}; 

  

export default EventFilter; 