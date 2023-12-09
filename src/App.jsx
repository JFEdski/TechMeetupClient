
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import Home from "./components/Home";
// import EventMap from "./components/map/EventMap";


// import Event from './components/event/EventPage';



import Filter from './components/filter/Filter';
import EventCreationForm from './components/event/EventCreationForm';
// import Explore from './components/Explore';

import "./App.css";
import EventPage from "./components/event/EventPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Filter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<EventCreationForm />} />

          


          {/* <Route path="/filter" element={<Filter />} /> */}
          {/* <Route path="/create" element={<CreateEvent />} /> */}
          <Route path="/eventPage" element={<EventPage />} />
          {/* <Route path="/details/:id" element={<EventDetails />} /> */}


        </Routes>
        {/* <EventMap /> */}


      </BrowserRouter>
    </div >
  );
}

export default App;
