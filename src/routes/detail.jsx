import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/comment';
import CommentForm from '../components/commentForm';
import { db } from '../firebase';

const Detail = ({ user }) => {
  const postId = useParams();
  const [post, setPost] = useState();
  const commentRef = useRef();
  const [comments, setCommnets] = useState([]);

  useEffect(() => {
    db.collection('freePosts')
      .doc(postId.id)
      .get()
      .then((result) => setPost(result.data()));
  }, []);

  useEffect(() => {
    db.collection('comments')
      .get({ postId: postId.id })
      .then((result) => {
        let commentsArray = [];

        result.forEach((doc) => {
          commentsArray.push(doc.data());
        });

        setCommnets(commentsArray);
      });
  }, []);

  return (
    <div className="main-content detail">
      <div className="post-author">
        <div
          className="author-image"
          style={{ backgroundImage: `url("https://via.placeholder.com/350")` }}
        ></div>
        <strong className="author-name">{post?.username}</strong>
      </div>

      <div className="post-content">
        <p className="text">{post?.content}</p>
        {post?.image != '' ? (
          <div
            className="image"
            style={{ backgroundImage: `url(${post?.image})` }}
          ></div>
        ) : null}
      </div>

      <div className="my-reaction">
        <button type="button" className="is-like">
          <i className="fa-solid fa-heart"></i>
          <span>좋아요</span>
        </button>
        <button
          type="button"
          className="is-comment"
          onClick={() => commentRef.current.focus()}
        >
          <i className="fa-solid fa-message"></i>
          <span>댓글</span>
        </button>
      </div>

      <div className="comment-box">
        <ul className="comment-list">
          {comments.map((comment, i) => {
            return <Comment comment={comment} key={i} />;
          })}
        </ul>
      </div>

      <CommentForm user={user} postId={postId} commentRef={commentRef}/>
    </div>
  );
};

export default Detail;
