import React from 'react';
import UserDetail from './UserDetail';
import './FlagCard.css';

function FlagCard(props) {
  return (
    <div className="FlagCard">
      <UserDetail email={props.email} jobTitle={props.jobTitle} avatar={props.avatar} />
      <div className="FlagCard-country">
        <div><img src={`https://www.countryflags.io/${props.countryCode}/flat/64.png`} alt="https://www.countryflags.io/us/flat/64.png"></img></div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default FlagCard;
