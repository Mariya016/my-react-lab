import React from 'react';
import '../styles/Userdata.css';

function Userdata({ userdata }) {
  const { name, email, role, Profile_Picture } = userdata;

  return (
    <div className="User-data">
      <h2>User Data</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <img
        src={Profile_Picture}
        alt="User Profile"
        style={{ width: '300px', height: 'auto' }} // Fixed height attribute
      />
    </div>
  );
}

export default Userdata;
