import { Link } from 'react-router-dom';



const EventCard = ({ event }) => {

  useEffect(() => {
    console.log(event)
  }, []);
  
  const [events, setEvents] = useState([]);



  return(
    <div className="event-container" to={<EventDetails/>}>
      <div className="event-item-container">
        <div className="event-img-container">
          <img src="https://picsum.photos/400/600" alt="Event image"/>
        </div>

        <div className="event-body-container">
          <div className="overlay"></div>

          <div className="event-info">
            <div className="separator"></div>
            <p className="event-title">{event.name}</p>
            <p className="event-info">{event.location}</p>
            <p className="price">{event.date}</p>

            <div className="additional-info">
              <p className="event-info">
                <i className="fas fa-map-marker-alt"></i>
                {event.category}
              </p>
              <p className="event-info">
                <i className="far fa-calendar-alt"></i>
                {event.time}
              </p>
              <p className="info description">
                {event.description}
              </p>
            </div>
          </div>

          <Link to={EventDetails}>
          <button className="action" onClick={EventDetails}>Register</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default EventCard;