import React from 'react';
import { db } from '../firebase';

const CommentForm = ({ commentRef, user, postId }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    db.collection('comments').add({
      postId: postId.id,
      content: commentRef.current.value,
      date: new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0],
      uid: user.uid,
      name: user.displayName,
    });
  };

  return (
    <div className="comment-form-wrap">
      <p className="comment-title">댓글쓰기</p>
      <form className="comment-form">
        <input type="text" className="comment-input" ref={commentRef} />
        <button className="submit-button" onClick={onSubmit}>
          등록
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
