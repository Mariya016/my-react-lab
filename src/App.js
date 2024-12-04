import React from 'react';
import Userdata from './Components/Userdata';
import StatisticsdataObject from './Components/StatisticsdataObject';
import Message from './Components/message';

function App() {
  const userdata = {
    name: "Jane",
    email: "janewatson@gmail.com",
    role: "Electrical Engineer",
    Profile_Picture: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2HeBxqOYeLRiHo3whKMTuB/ae07b820ef9fdd0689e0e9fdd048cd58/iStock-996179448.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
  };

  const totalUser = 100;
  const activeUser = 80;
  const newSignups = 2;

  const activePercentage = (activeUser / totalUser) * 100;

  const statisticsData = {
    totalUser,
    activeUser,
    newSignups,
    activePercentage: activePercentage.toFixed(2)
  };

  // Correcting the message object to key-value pairs
  const message = {
    message1: "Jane is an electrical engineer, and she design electrical systems that help power homes, businesses, and new technologies.",
    message2: "She has an experience of 5 years.",
    message3: "Jane has studied at Harvard."
  };

  return (
    <div>
      <Userdata userdata={userdata} />
      <StatisticsdataObject StatisticsdataObject={statisticsData} />
      <Message message={message} /> 
    </div>
  );
}

export default App;
