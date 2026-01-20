import React from 'react';
// The App component's contents are currently a placeholder — please update this file first for a new design / component!
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MFASetup } from './pages/MFASetup';
import { Dashboard } from './pages/Dashboard';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mfa-setup" element={<MFASetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>;
}