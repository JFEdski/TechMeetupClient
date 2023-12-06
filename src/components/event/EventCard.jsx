const EventCard = ({ event }) => {
  return(
    <div class="event-container">
    <div class="event-item-container">
        <div class="event-img-container">
            {/* <img src="./images/img1.jpg" alt="Event image"/> */}
        </div>

        <div class="event-body-container">
            <div class="overlay"></div>

            <div class="event-info">
                <p class="event-title">{event.name}</p>
                <div class="separator"></div>
                <p class="event-info">{event.location}</p>
                <p class="price">Free</p>

                <div class="additional-info">
                    <p class="event-info">
                        <i class="fas fa-map-marker-alt"></i>
                        {event.language}
                    </p>
                    <p class="event-info">
                        <i class="far fa-calendar-alt"></i>
                        {event.dateTime}
                    </p>

                    <p class="info description">
                        Welcome! Everyone has a unique perspective after reading a book, and we would love you
                        to share yours with us! We meet one Sunday evening <span>more...</span>
                    </p>
                </div>
            </div>
            <button class="action">Register</button>
        </div>
    </div>
    </div>
  );
  };

  export default EventCard;