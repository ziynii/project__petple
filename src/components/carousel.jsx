import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-box">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="/imgs/main01.jpg" alt="펫플 100% 즐기기 배너" />
        </div>
        <div className="carousel-item">
          <img src="/imgs/main02.jpg" alt="사료정보 커뮤니티 홍보" />
        </div>
        <div className="carousel-item">
          <img src="/imgs/main03.jpg" alt="반려견과 국내여행 이벤트" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
