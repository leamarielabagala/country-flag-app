import React from 'react';
import './UserDetail.css';

function UserDetail(props) {
  return (
    <div className="UserDetail">
      <div>
        <h5>{ props.email }</h5>
        <label>{ props.jobTitle }</label>
      </div>
      <img src={props.avatar} alt="https://www.w3schools.com/howto/img_avatar.png" />
    </div>
  );
}

export default UserDetail;
