import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const Detail = () => {
  const postId = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    db.collection('freePosts')
      .doc(postId.id)
      .get()
      .then((result) => setPost(result.data()));
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
        <button type="button" className="is-comment">
          <i className="fa-solid fa-message"></i>
          <span>댓글</span>
        </button>
      </div>

      <div className="comment-box">
        <ul className="comment-list">
          <li className="comment-item">
            <div className="comment-user">
              <div
                className="user-image"
                style={{
                  backgroundImage: `url("https://via.placeholder.com/350")`,
                }}
              ></div>
              <strong className="user-name">치와와사랑</strong>
            </div>
            <div className="comment-info">
              <p className="content">봄이 너무 예쁘네요 ~ </p>
              <span className="date">2022-04-17</span>
            </div>
          </li>
          <li className="comment-item">
            <div className="comment-user">
              <div
                className="user-image"
                style={{
                  backgroundImage: `url("https://via.placeholder.com/350")`,
                }}
              ></div>
              <strong className="user-name">치와와사랑</strong>
            </div>
            <div className="comment-info">
              <p className="content">봄이 너무 예쁘네요 ~ </p>
              <span className="date">2022-04-17</span>
            </div>
          </li>
          <li className="comment-item">
            <div className="comment-user">
              <div
                className="user-image"
                style={{
                  backgroundImage: `url("https://via.placeholder.com/350")`,
                }}
              ></div>
              <strong className="user-name">치와와사랑</strong>
            </div>
            <div className="comment-info">
              <p className="content">봄이 너무 예쁘네요 ~ </p>
              <span className="date">2022-04-17</span>
            </div>
          </li>
          <li className="comment-item">
            <div className="comment-user">
              <div
                className="user-image"
                style={{
                  backgroundImage: `url("https://via.placeholder.com/350")`,
                }}
              ></div>
              <strong className="user-name">치와와사랑</strong>
            </div>
            <div className="comment-info">
              <p className="content">봄이 너무 예쁘네요 ~ </p>
              <span className="date">2022-04-17</span>
            </div>
          </li>
          <li className="comment-item">
            <div className="comment-user">
              <div
                className="user-image"
                style={{
                  backgroundImage: `url("https://via.placeholder.com/350")`,
                }}
              ></div>
              <strong className="user-name">치와와사랑</strong>
            </div>
            <div className="comment-info">
              <p className="content">봄이 너무 예쁘네요 ~ </p>
              <span className="date">2022-04-17</span>
            </div>
          </li>
          <li className="comment-item">
            <div className="comment-user">
              <div
                className="user-image"
                style={{
                  backgroundImage: `url("https://via.placeholder.com/350")`,
                }}
              ></div>
              <strong className="user-name">치와와사랑</strong>
            </div>
            <div className="comment-info">
              <p className="content">봄이 너무 예쁘네요 ~ </p>
              <span className="date">2022-04-17</span>
            </div>
          </li>
        </ul>

        <div className="comment-form-wrap">
          <p className="comment-title">댓글쓰기</p>
          <form className="comment-form">
            <input type="text" className="comment-input" />
            <button className="submit-button">등록</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detail;
