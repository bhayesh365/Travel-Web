import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CustomerSearch from './pages/CustomerSearch';
import AgencyDashboard from './pages/AgencyDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Travel-Web</h1>
        </header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/customer/search" element={<CustomerSearch />} />
          <Route path="/agency/dashboard" element={<AgencyDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
