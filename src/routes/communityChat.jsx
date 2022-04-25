import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const CommunityChat = () => {
  const docId = useParams();
  const [community, setCommunity] = useState({});

  useEffect(() => {
    db.collection('community')
      .doc(docId.id)
      .get()
      .then((result) => setCommunity(result.data()));
  }, []);

  return (
    <div className="main-content community-chat">
      <div className="content-title">
        <h3 className="title">{community.title}</h3>
      </div>

      <div className="chat-content">
        <ul className="chat-list">
          <li className="chat-item">
            <div
              className="user-image"
              style={{
                backgroundImage: `url("https://via.placeholder.com/350")`,
              }}
            ></div>
            <div className="chat-align-box">
              <p className="user-name">똘이누나</p>
              <p className="text">어서오세요!!</p>
            </div>
            <div className="date">13:31</div>
          </li>
        </ul>

        <form className="chat-form">
          <input
            type="text"
            placeholder="대화에 참여해보세요 😋"
            className="chat-input"
          />
          <button type="submit" className="submit-button">
            전송
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityChat;
