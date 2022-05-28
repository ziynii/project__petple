import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../firebase';

const MypageEdit = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [userName, setUserName] = useState(user.displayName);
  const [userImage, setUserImage] = useState('');
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');

  const onChangeName = (event) => {
    setUserName(event.target.value);
  };

  const onSubmitImage = (event) => {
    event.preventDefault();
    const file = document.querySelector('#image').files[0];
    const storageRef = storage.ref();
    const saveImageRef = storageRef.child('image/' + file.name);
    const uploadImage = saveImageRef.put(file);

    uploadImage.on(
      'state_change',
      null,
      (error) => {
        console.log('실패사유', error);
      },
      () => {
        uploadImage.snapshot.ref.getDownloadURL().then((url) => {
          auth.currentUser.updateProfile({
            photoURL: url,
          });
          setUserImage(url);
        });
      }
    );
  };

  const onSubmitName = (event) => {
    event.preventDefault();
    auth.currentUser.updateProfile({
      displayName: userName,
    });
  };

  const onSubmitSave = () => {
    db.collection('user').doc(userId).update({
      image: userImage,
      name: userName,
    });
    navigate('/mypage');
    window.location.reload();
  };

  useEffect(() => {
    db.collection('user')
      .where('email', '==', user?.email)
      .get()
      .then((result) => {
        result.forEach((doc) => setUserId(doc.id));
      });
  }, []);

  return (
    <div className="main-content mypage-edit">
      <Helmet>
        <title>프로필수정 | PETPLE</title>
      </Helmet>

      <h3 className="content-title">프로필 수정</h3>

      <div className="edit-box">
        <p className="edit-title">프로필 사진 변경</p>
        <div
          className="preview-image"
          style={{
            backgroundImage: `url(${
              user?.photoURL == null ? '/imgs/default-image.png' : user.photoURL
            })`,
          }}
        ></div>
        <form className="image-form">
          <input type="file" className="image-input" id="image" />
          <button className="submit-button" onClick={onSubmitImage}>
            이미지 변경 확인
          </button>
        </form>
      </div>

      <div className="edit-box">
        <p className="edit-title">이름 변경</p>

        <form className="name-form">
          <input
            type="text"
            className="name-input"
            value={userName}
            onChange={onChangeName}
          />
          <button className="submit-button" onClick={onSubmitName}>
            이름 변경 확인
          </button>
        </form>
      </div>

      <button className="save-button" onClick={onSubmitSave}>
        변경내용 저장
      </button>
    </div>
  );
};

export default MypageEdit;
