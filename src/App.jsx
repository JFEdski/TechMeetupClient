import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
//import EventPage from './components/event/EventPage';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import Home from './components/Home';
import Filter from './components/filter/Filter';
import EventCreationForm from './components/event/EventCreationForm';

// import Explore from './components/Explore';
import "./App.css";

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
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
