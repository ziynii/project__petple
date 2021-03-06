import React, { useRef, useState } from 'react';
import { db, storage } from '../firebase';
import Overlay from './overlay';

const UploadPostModal = ({ setIsUpload, user }) => {
  const [textContent, setTextContent] = useState('');
  const imageRef = useRef(null);
  const date = new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0];

  const onChangeTextContent = (e) => {
    setTextContent(e.target.value);
  };

  const onSubmit = () => {
    if (imageRef.current.value == '') {
      db.collection('freePosts').add({
        content: textContent,
        image: '',
        date: date,
        uid: user.uid,
        username: user.displayName,
        likes: [],
        userImage: user.photoURL,
      });
    } else {
      const file = document.querySelector('.image-input').files[0];
      const storageRef = storage.ref();
      const saveImageRef = storageRef.child('image/' + file.name);
      const uploadImage = saveImageRef.put(file);

      uploadImage.on(
        'state_change',
        null,
        (error) => {
          console.log(error);
        },
        () => {
          uploadImage.snapshot.ref.getDownloadURL().then((url) => {
            db.collection('freePosts').add({
              content: textContent,
              image: url,
              date: date,
              uid: user.uid,
              username: user.displayName,
              likes: [],
              userImage: user.photoURL,
            });
          });
        }
      );
    }

    setIsUpload(false);
  };

  return (
    <>
      <div className="modal upload-modal">
        <h4 className="title">글쓰기</h4>

        <form className="upload-form">
          <textarea
            type="text"
            className="content-input"
            value={textContent}
            onChange={onChangeTextContent}
            rows="8"
          />
          <input type="file" className="image-input" ref={imageRef} />
        </form>

        <button className="submit-button" onClick={onSubmit}>
          완료
        </button>

        <button className="close-button" onClick={() => setIsUpload(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <Overlay />
    </>
  );
};

export default UploadPostModal;
