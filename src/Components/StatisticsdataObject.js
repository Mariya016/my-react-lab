import React from 'react';
import '../styles/StatisticsdataObject.css';

function StatisticsdataObject({ StatisticsdataObject }) {
  const { totalUser, activeUser, newSignups, activePercentage } = StatisticsdataObject;

  return (
    <div className="Statistics-data-Object">
      <h2>Statistics Data Object</h2>
      <p>Total User: <span>{totalUser}</span></p>
      <p>Active User: <span>{activeUser}</span></p>
      <p>New Sign Ups: <span>{newSignups}</span></p>
      <p>Active Percentage: <span>{activePercentage}%</span></p>
    </div>
  );
}

export default StatisticsdataObject;
