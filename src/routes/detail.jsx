import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/comment';
import CommentForm from '../components/commentForm';
import PostReaction from '../components/postReaction';
import { db } from '../firebase';

const Detail = ({ user, userImage }) => {
  const postId = useParams();
  const [post, setPost] = useState();
  const commentRef = useRef();
  const [comments, setCommnets] = useState([]);

  const onClickLike = () => {
    db.collection('freePosts')
      .where('likes', 'array-contains', user.uid)
      .get()
      .then((result) => {
        let mylikesArray = [];
        result.forEach((doc) => {
          mylikesArray.push(doc.id);
        });
        if (mylikesArray.includes(postId.id)) {
          alert('이미 좋아요 한 글이에요😁');
        } else {
          db.collection('freePosts')
            .doc(postId.id)
            .update({
              likes: [...post.likes, user.uid],
            });
        }
      });
  };

  useEffect(() => {
    db.collection('freePosts')
      .doc(postId.id)
      .onSnapshot((result) => setPost(result.data()));
  }, []);

  useEffect(() => {
    db.collection('comments')
      .orderBy('date')
      .where('postId', '==', postId.id)
      .onSnapshot((result) => {
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
          style={{
            backgroundImage: `url(${
              userImage == '' ? '/imgs/default-image.png' : userImage
            })`,
          }}
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

      <PostReaction post={post} user={user} />

      <div className="my-reaction">
        <button type="button" className="is-like" onClick={onClickLike}>
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
        <p className="comment-total">댓글 {comments.length}개</p>
        <ul className="comment-list">
          {comments.map((comment, i) => {
            return <Comment comment={comment} key={i} userImage={userImage} />;
          })}
        </ul>
      </div>

      <CommentForm user={user} postId={postId} commentRef={commentRef} />
    </div>
  );
};

export default Detail;
