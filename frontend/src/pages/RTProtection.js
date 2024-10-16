import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

const Dashboard = () => <h3>RT Protection Dashboard</h3>;
const Threats = () => <h3>Threats</h3>;
const Protection = () => <h3>Protection</h3>;

const RTProtection = () => {
  return (
    <div>
      <h2>RT Protection</h2>
      <nav>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="threats">Threats</Link></li>
          <li><Link to="protection">Protection</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<h3>Please select a topic.</h3>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="threats" element={<Threats />} />
        <Route path="protection" element={<Protection />} />
      </Routes>
    </div>
  );
};

export default RTProtection;
