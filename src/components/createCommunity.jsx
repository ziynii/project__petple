import React, { useRef, useState } from 'react';
import { db } from '../firebase';
import Overlay from './overlay';

const CreateCommunity = ({ user, setCreateCommunity }) => {
  const [background, setBackground] = useState('');
  const titleRef = useRef();
  const captionRef = useRef();

  const onSubmit = () => {
    db.collection('community').add({
      title: titleRef.current.value,
      caption: captionRef.current.value,
      member: [user.uid],
      color: background,
    });
    setCreateCommunity(false);
  };

  return (
    <>
      <div className="upload-modal create-community">
        <h4 className="title">커뮤니티 생성</h4>

        <form className="create-form">
          <input
            className="title"
            type="text"
            ref={titleRef}
            placeholder="커뮤니티 이름을 입력하세요!"
          />
          <input
            className="caption"
            type="text"
            ref={captionRef}
            placeholder="한 줄 소개를 입력하세요!"
          />
        </form>

        <div className="color-select">
          <p className="color-caption">
            커뮤니티에 표시될 색상을 정해보세요 <br />
            (추후에 변경이 불가해요)
          </p>
          <ul className="color-list">
            <li
              className={
                'color-item' + (background == '#9ADCFF' ? ' is-active' : '')
              }
              style={{ backgroundColor: '#9ADCFF' }}
              onClick={() => setBackground('#9ADCFF')}
            ></li>
            <li
              className={
                'color-item' + (background == '#FFF89A' ? ' is-active' : '')
              }
              style={{ backgroundColor: '#FFF89A' }}
              onClick={() => setBackground('#FFF89A')}
            ></li>
            <li
              className={
                'color-item' + (background == '#FFB2A6' ? ' is-active' : '')
              }
              style={{ backgroundColor: '#FFB2A6' }}
              onClick={() => setBackground('#FFB2A6')}
            ></li>
            <li
              className={
                'color-item' + (background == '#FF8AAE' ? ' is-active' : '')
              }
              style={{ backgroundColor: '#FF8AAE' }}
              onClick={() => setBackground('#FF8AAE')}
            ></li>
            <li
              className={
                'color-item' + (background == '#91C483' ? ' is-active' : '')
              }
              style={{ backgroundColor: '#91C483' }}
              onClick={() => setBackground('#91C483')}
            ></li>
          </ul>
        </div>

        <button className="submit-button" onClick={onSubmit}>
          완료
        </button>

        <button className="close-button" onClick={() => setCreateCommunity(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <Overlay />
    </>
  );
};

export default CreateCommunity;
