import React, { useState } from 'react';
import { db } from '../firebase';
import Overlay from './overlay';

const EditPostModal = ({ setIsEdit, post, postId }) => {
  const [textValue, setTextValue] = useState(post.content);

  const onChangeTextValue = (event) => {
    setTextValue(event.target.value);
  };

  const onUpdatePost = () => {
    db.collection('freePosts').doc(postId?.id).update({
      content: textValue,
    });

    setIsEdit(false);
  };

  return (
    <>
      <div className="upload-modal edit-post">
        <h4 className="title">글 수정하기</h4>
        <p className="notice">( 사진은 수정이 불가해요 😅 )</p>

        <form className="upload-form">
          <textarea
            type="text"
            className="content-input"
            rows="8"
            value={textValue}
            onChange={onChangeTextValue}
          />
        </form>

        <button className="submit-button" onClick={onUpdatePost}>
          완료
        </button>

        <button className="close-button" onClick={() => setIsEdit(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <Overlay />
    </>
  );
};

export default EditPostModal;
