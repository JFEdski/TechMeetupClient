
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CreateEvent from "./components/event/CreateEvent";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import Home from "./components/Home";
// import EventMap from "./components/map/EventMap";

import Event from './components/event/EventPage';
import Filter from './components/filter/Filter';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
        {/* <EventMap /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
