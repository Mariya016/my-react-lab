import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import React from 'react';



function App() {
  return (
    <div className="App">
      <h1>"A Small Web Page"</h1>
     <h2> Your Roll.no...</h2>
      <Header/>    
      <Content/>
    </div>
  );
}

export default App;
