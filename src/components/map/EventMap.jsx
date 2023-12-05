import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh",
};
const center = {
  lat: 39.742043,
  lng: -104.991531,
};

function EventMap() {
  const YOUR_API_KEY = "AIzaSyB3EqAnBwOEn-MgV9tekQmJqquq6_-tfPg";
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: YOUR_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default EventMap;
