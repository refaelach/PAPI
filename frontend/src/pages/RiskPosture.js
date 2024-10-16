import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

const Dashboard = () => <h3>Risk Posture Dashboard</h3>;
const Vulnerabilities = () => <h3>Vulnerabilities</h3>;
const Misconfigurations = () => <h3>Misconfigurations</h3>;

const RiskPosture = () => {
  return (
    <div>
      <h2>Risk Posture</h2>
      <nav>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="vulnerabilities">Vulnerabilities</Link></li>
          <li><Link to="misconfigurations">Misconfigurations</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<h3>Please select a topic.</h3>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="vulnerabilities" element={<Vulnerabilities />} />
        <Route path="misconfigurations" element={<Misconfigurations />} />
      </Routes>
    </div>
  );
};

export default RiskPosture;
