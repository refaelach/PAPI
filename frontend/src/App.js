import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AttackSurface from './pages/AttackSurface';
import RiskPosture from './pages/RiskPosture';
import RTProtection from './pages/RTProtection';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Integrations from './pages/Integrations';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="attack-surface" element={<AttackSurface />}>
              <Route index element={<Navigate to="inventory" replace />} />
              <Route path="inventory" element={<AttackSurface.Inventory />} />
              <Route path="recommendations" element={<AttackSurface.Recommendations />} />
            </Route>
            <Route path="risk-posture" element={<RiskPosture />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<RiskPosture.Dashboard />} />
              <Route path="vulnerabilities" element={<RiskPosture.Vulnerabilities />} />
              <Route path="misconfigurations" element={<RiskPosture.Misconfigurations />} />
            </Route>
            <Route path="rt-protection" element={<RTProtection />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<RTProtection.Dashboard />} />
              <Route path="threats" element={<RTProtection.Threats />} />
              <Route path="protection" element={<RTProtection.Protection />} />
            </Route>
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="integrations" element={<Integrations />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
