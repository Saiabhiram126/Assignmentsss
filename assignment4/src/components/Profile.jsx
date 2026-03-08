import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();

  return (
    <div>
      <h1>Profile</h1>
      <p>Employee ID: {id}</p>
      <p>Name: John Doe</p>
      <p>Email: john.doe@company.com</p>
    </div>
  );
}

export default Profile;