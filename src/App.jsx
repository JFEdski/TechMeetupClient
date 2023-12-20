
import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import CreateEvent from "./components/event/CreateEvent";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import Home from "./components/Home";
import EventCreationForm from './components/event/EventCreationForm';
import Filter from './components/filter/Filter';
import "./App.css";
// import EventPage from "./components/event/EventPage";
import Auth from "./components/auth/Auth";

import { useState, useEffect } from "react";
import EventDetails from "./components/event/EventDetails";
import EventRegistration from "./components/event/EventRegistration";


function App() {


  const [token, setToken] = useState('asdf');
  // const [user, setUser] = useState('');

  useEffect(() => {
    setToken(localStorage.token);
    // setUser(localStorage.user);
  },
    []);

  function updateToken(newToken, newUser) {
    setToken(newToken);
    localStorage.token = newToken;
    // setUser(newUser);
    localStorage.user = newUser;
  }

  function clearToken() {
    setToken('');
    localStorage.removeItem('token');
  }

  console.log(token)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} clearToken={clearToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Filter />} />
          <Route path="/login" element={<Login setToken={updateToken} />} />
          <Route path="/signup" element={<Signup setToken={updateToken} />} />
          <Route path="/create" element={<EventCreationForm token={token} />} />
          <Route path="/auth" element={<Auth setToken={updateToken} />} />
          {/* <Route path="/filter" element={<Filter />} /> */}
          {/* <Route path="/create" element={<CreateEvent />} /> */}
          {/* <Route path="/eventPage/:id" element={<EventDetails />} /> */}
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/event/register/:eventId" element={<EventRegistration />} />

          {/* <Route path="/event/:id" element={<EventDetails />} /> */}


        </Routes>
        {/* <EventMap /> */}


      </BrowserRouter>
    </div >
  );
}

export default App;
