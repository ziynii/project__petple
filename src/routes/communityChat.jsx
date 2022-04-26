import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatForm from '../components/chatForm';
import Message from '../components/message';
import { db } from '../firebase';

const CommunityChat = ({ user }) => {
  const docId = useParams();
  const [community, setCommunity] = useState({});
  const [messages, setMessages] = useState([]);

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
              return <Message message={message} user={user} key={i} />;
            })}
        </ul>

        <ChatForm user={user} docId={docId} />
      </div>
    </div>
  );
};

export default CommunityChat;
