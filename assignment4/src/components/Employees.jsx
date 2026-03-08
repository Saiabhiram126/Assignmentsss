import React from 'react';

function Employees() {
  const employees = [
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Manager' },
    { id: 3, name: 'Bob Johnson', position: 'Designer' }
  ];

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.position}</li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;