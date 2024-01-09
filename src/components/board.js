import React, { useState } from 'react';
import Profiles from './profiles';
import { Leaderboard } from './database';
import '../board.css'; // Import the CSS file

export default function Board() {
  const [period, setPeriod] = useState(0);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <div className="container">
    <div className="sidebar">
      <h2>Select Time Period:</h2>
      <button onClick={() => handlePeriodChange(0)}>All-Time</button>
      <button onClick={() => handlePeriodChange(7)}>7 Days</button>
      <button onClick={() => handlePeriodChange(30)}>30 Days</button>
    </div>

    <div className="board" style={{ marginLeft: '200px' }}>
      <h1 className='leaderboard'>{getLeaderboardHeading(period)}</h1>
      <Profiles Leaderboard={between(Leaderboard, period)} />
    </div>
  </div>
);
}

function between(data, period) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - period);

  let filter = data.filter(val => {
    let userDate = new Date(val.dt);
    if (period === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  return filter.sort((a, b) => b.score - a.score);
}

function getLeaderboardHeading(period) {
  return period === 0 ? 'Leaderboard ' : 'Leaderboard';
}
