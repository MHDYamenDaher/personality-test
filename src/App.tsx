import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getAxiosConnection } from './api';
import './App.css';

// localization config file
import './i18n';
import Landing from './screens/Landing';
import Test from './screens/Test';

getAxiosConnection();

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Navigate to="/landing" />} />
    </Routes>
  ); 
}

export default App;
