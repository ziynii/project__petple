import React from 'react';

const Message = ({ message, user }) => {
  return (
    <li className={'chat-item' + (message.uid == user.uid ? ' mine' : '')}>
      <div
        className="user-image"
        style={{
          backgroundImage: `url("https://via.placeholder.com/350")`,
        }}
      ></div>
      <div className="chat-align-box">
        <p className="user-name">{message.name}</p>
        <p className="text">{message.content}</p>
      </div>
      <div className="date">{message.date}</div>
    </li>
  );
};

export default Message;
