import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="go-back-button"
      onClick={() => navigate(-1)}
    >
      <i className="fa-solid fa-arrow-left-long"></i>
    </button>
  );
};

export default BackButton;
