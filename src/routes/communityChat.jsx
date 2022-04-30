import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatForm from '../components/chatForm';
import Message from '../components/message';
import { db } from '../firebase';

const CommunityChat = ({ user, userImage }) => {
  const docId = useParams();
  const today = new Date();
  const [community, setCommunity] = useState({});
  const [messages, setMessages] = useState([]);
  const dateArray = [];

  messages.forEach((message) => {
    if (dateArray.includes(message.date)) {
      return;
    } else {
      dateArray.push(message.date);
    }
  });

  const sortDate = dateArray.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
    else return -1;
  });

  const sortTime = (data) => {
    data.sort((a, b) => {
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      if (a.time === b.time) return 0;
      else return -1;
    });
    return data;
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
      .onSnapshot((result) => {
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
        {sortDate.map((date, i) => {
          let todayMessages = messages.filter((message) => {
            return message.date == date;
          });
          return (
            <ul className="chat-list" key={i}>
              <li className="today">
                <p>{date}</p>
              </li>

              {sortTime(todayMessages).map((message, i) => {
                return <Message message={message} user={user} key={i} userImage={userImage}/>;
              })}
            </ul>
          );
        })}
      </div>

      <ChatForm user={user} docId={docId} today={today} />
    </div>
  );
};

export default CommunityChat;
