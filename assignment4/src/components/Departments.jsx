import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Departments() {
  return (
    <div>
      <h1>Departments</h1>
      <nav>
        <Link to="hr" style={{ margin: '0 10px' }}>HR</Link>
        <Link to="finance" style={{ margin: '0 10px' }}>Finance</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Departments;