import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const CommunityChat = ({ user }) => {
  const docId = useParams();
  const [community, setCommunity] = useState({});
  const chatRef = useRef();
  const [messages, setMessages] = useState([]);

  const today = new Date();
  const hours = ('0' + today.getHours()).slice(-2);
  const minutes = ('0' + today.getMinutes()).slice(-2);
  const time = hours + ':' + minutes;

  const onSubmitChat = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      content: chatRef.current.value,
      date: time,
      uid: user.uid,
      name: user.displayName,
      chatroom: docId.id,
    });

    chatRef.current.value = '';
		chatRef.current.focus();
  };

  useEffect(() => {
    db.collection('community')
      .doc(docId.id)
      .get()
      .then((result) => setCommunity(result.data()));
  }, []);

  useEffect(() => {
    db.collection('messages')
      .where('chatroom', '==', docId.id)
      .get()
      .then((result) => {
        let messagesArray = [];
        result.forEach((doc) => {
          messagesArray.push(doc.data());
        });
        setMessages(messagesArray);
      });
  }, []);

  return (
    <div className="main-content community-chat">
      <div className="content-title">
        <h3 className="title">{community.title}</h3>
      </div>

      <div className="chat-content">
        <ul className="chat-list">
          {messages
            .sort((a, b) => {
              if (a.date < b.date) return -1;
              if (a.date > b.date) return 1;
              if (a.date === b.date) return 0;
              else return -1;
            })
            .map((message, i) => {
              return (
                <li
                  className={
                    'chat-item' + (message.uid == user.uid ? ' mine' : '')
                  }
                  key={i}
                >
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
            })}
        </ul>

        <form className="chat-form">
          <input
            type="text"
            placeholder="대화에 참여해보세요 😋"
            className="chat-input"
            ref={chatRef}
          />
          <button
            type="submit"
            className="submit-button"
            onClick={onSubmitChat}
          >
            전송
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityChat;
