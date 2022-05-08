import React, { useRef } from 'react';
import { db } from '../firebase';

const ChatForm = ({ user, docId, today }) => {
  const chatRef = useRef();

  const date = new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0];
  const hours = ('0' + today.getHours()).slice(-2);
  const minutes = ('0' + today.getMinutes()).slice(-2);
  const time = hours + ':' + minutes;

  const onSubmitChat = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      content: chatRef.current.value,
      date: date,
      time: time,
      uid: user.uid,
      name: user.displayName,
      chatroom: docId.id,
			userImage : user.photoURL,
    });

    chatRef.current.value = '';
    chatRef.current.focus();
  };

  return (
    <form className="chat-form">
      <input
        type="text"
        placeholder="대화에 참여해보세요 😋"
        className="chat-input"
        ref={chatRef}
      />
      <button type="submit" className="submit-button" onClick={onSubmitChat}>
        전송
      </button>
    </form>
  );
};

export default ChatForm;
