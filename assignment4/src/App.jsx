import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Employees from './components/Employees.jsx';
import Departments from './components/Departments.jsx';
import Profile from './components/Profile.jsx';
import NotFound from './components/NotFound.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/dashboard" style={{ margin: '0 10px' }}>Dashboard</Link>
        <Link to="/employees" style={{ margin: '0 10px' }}>Employees</Link>
        <Link to="/departments" style={{ margin: '0 10px' }}>Departments</Link>
        <Link to="/profile/1" style={{ margin: '0 10px' }}>Profile</Link>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{ margin: '0 10px' }}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/departments" element={<Departments />}>
          <Route path="hr" element={<div>HR Department Details</div>} />
          <Route path="finance" element={<div>Finance Department Details</div>} />
        </Route>
        <Route path="/profile/:id" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;