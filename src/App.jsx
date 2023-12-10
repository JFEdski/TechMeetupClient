
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
// import CreateEvent from "./components/event/CreateEvent";
import Login from "./components/auth/login/Login";
import Signup from "./components/auth/signup/Signup";
import Home from "./components/Home";
import EventCreationForm from './components/event/EventCreationForm';

// import EventMap from "./components/map/EventMap";

// import Event from './components/event/EventPage';
import Filter from './components/filter/Filter';
import "./App.css";
import EventPage from "./components/event/EventPage";

import { useState, useEffect } from "react";


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
  //Add once navbar has the
  // function clearToken() {
  // 	setToken('');
  // 	localStorage.removeItem('token');
  // }

  console.log(token)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Filter />} />
          <Route path="/login" element={<Login setToken={updateToken} />} />
          <Route path="/signup" element={<Signup setToken={updateToken} />} />
          <Route path="/create" element={<EventCreationForm />} />


          <Route path="/eventPage" element={<EventPage />} />
          {/* <Route path="/details/:id" element={<EventDetails />} /> */}


        </Routes>
        {/* <EventMap /> */}


      </BrowserRouter>
    </div >
  );
}

export default App;
