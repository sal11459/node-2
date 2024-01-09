import React from 'react';
import './profiles.css'; // Assuming you have a CSS file named profiles.css for styling

export default function Profiles({ Leaderboard }) {
  return (
    
    <div className="profile-container">
      {Leaderboard.map((value, index) => (
        <div className={`flex ${value.highlight ? 'highlight' : ''}`} key={index}>
          <span className="rank">Rank: {index + 1}</span>
          <img className="profile-image" src={value.img} alt="" />
          <div className="info">
            <h3 className='name'>{value.name}</h3>    
            <span className="location">{value.location}</span>
          </div>                
          <div className="score-time">
            <h4>Score</h4>
            <span>{value.score}</span>
            <h4>Submission Time</h4>
            <p>{formatSubmissionTime(value.dt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function formatSubmissionTime(dateTimeString) {
  const submissionTime = new Date(dateTimeString);
  return submissionTime.toLocaleString(); // Adjust the formatting as needed
}
