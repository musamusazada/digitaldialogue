import React from 'react';
import styled from '@emotion/styled';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
type Props = {
  imgSrc: string;
  text: string;
};

const CoverPhoto: React.FC<Props> = ({ imgSrc, text }) => {
  return (
    <CoverWrapper>
      <img src={imgSrc} alt="Cover photo" />
      <p>{text}</p>
    </CoverWrapper>
  );
};

const CoverWrapper = styled.div`
  width: 100%;
  & img {
    height: 600px;
    width: 100%;
    object-fit: cover;
  }
  & p {
    font-size: 2rem;
    text-align: center;
  }
`;

export default CoverPhoto;
