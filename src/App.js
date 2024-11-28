// App.js
import React from 'react';
import './App.css';  
import Navbar from './Components/Navbar';  
import LandingPage from './Components/LandingPage';  
import Footer from './Components/Footer';
import Form from'./Components/Form';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Form />
      <Footer />
    </div>
  );
}

export default App; 
