import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/carousel';

const Home = ({ setShowHeaderAndNav, user }) => {
  const navigate = useNavigate();


  useEffect(() => {
    setShowHeaderAndNav(true);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="main-content home">
      <Carousel />
    </div>
  );
};

export default Home;
