import React from 'react';

const Message = ({ message, user, userImage }) => {
  return (
    <li className={'chat-item' + (message.uid == user.uid ? ' mine' : '')}>
      <div
        className="user-image"
        style={{
					backgroundImage: `url(${
						message.userImage == null ? '/imgs/default-image.png' : message.userImage
					})`,
				}}
      ></div>
      <div className="chat-align-box">
        <p className="user-name">{message.name}</p>
        <p className="text">{message.content}</p>
      </div>
      <div className="time">{message.time}</div>
    </li>
  );
};

export default Message;
