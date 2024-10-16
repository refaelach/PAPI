import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

const Inventory = () => <h3>Inventory</h3>;
const Recommendations = () => <h3>Recommendations</h3>;

const AttackSurface = () => {
  return (
    <div>
      <h2>Attack Surface</h2>
      <nav>
        <ul>
          <li><Link to="inventory">Inventory</Link></li>
          <li><Link to="recommendations">Recommendations</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<h3>Please select a topic.</h3>} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="recommendations" element={<Recommendations />} />
      </Routes>
    </div>
  );
};

export default AttackSurface;
