import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import BackButton from '../components/backButton';
import ChatForm from '../components/chatForm';
import Message from '../components/message';
import { db } from '../firebase';

const CommunityChat = ({ user }) => {
  const docId = useParams();
  const today = new Date();
  const [community, setCommunity] = useState({});
  const [messages, setMessages] = useState([]);
  const dateArray = [];
  const scrollRef = useRef();

  messages.forEach((message) => {
    if (dateArray.includes(message.date.slice(0, 10))) {
      return;
    } else {
      dateArray.push(message.date.slice(0, 10));
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
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      if (a.date === b.date) return 0;
      else return -1;
    });
    return data;
  };

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView();
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

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="main-content community-chat">
      <Helmet>
        <title>커뮤니티 | PETPLE</title>
      </Helmet>

      <div className="content-title">
        <BackButton />
        <h3 className="title">{community.title}</h3>
      </div>

      <div className="chat-content">
        {sortDate.map((date, i) => {
          let todayMessages = messages.filter((message) => {
            return message.date.slice(0, 10) == date;
          });
          return (
            <ul className="chat-list" key={i}>
              <li className="today">
                <p>{date}</p>
              </li>

              {sortTime(todayMessages).map((message, i) => {
                return <Message message={message} user={user} key={i} />;
              })}
            </ul>
          );
        })}
        <div className="scroll-box" ref={scrollRef}></div>
      </div>

      <ChatForm
        user={user}
        docId={docId}
        today={today}
        scrollToBottom={scrollToBottom}
      />
    </div>
  );
};

export default CommunityChat;
