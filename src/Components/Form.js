import React, { useState } from 'react';  
import '../styles/Form.css'; 


function Form() {
  // Example state for form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  // Added phone number field
  });

  // Handler for input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </label>
      <br />
      
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </label>
      <br />
      
      <label>
        Phone Number:
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          pattern="^[0-9]{10}$" // Simple pattern for 10-digit phone number
          required // Ensures the field is not left empty
        />
      </label>
      <br />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
