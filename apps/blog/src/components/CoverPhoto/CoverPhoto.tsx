import React from 'react';
import styled from '@emotion/styled';
import { Navigation } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Cover3 from '../../../assets/cover3.jpg';
import Cover4 from '../../../assets/cover4.jpg';
import Cover5 from '../../../assets/cover5.jpg';

// Import Swiper styles
/* eslint-disable import/no-unresolved */
import 'swiper/css';
/* eslint-disable import/no-unresolved */
import 'swiper/css/navigation';

type Props = {
  imgSrc: string;
  text: string;
};

const CoverPhoto: React.FC<Props> = ({ imgSrc, text }) => {
  return (
    <CoverWrapper>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        autoplay
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={imgSrc} alt="Cover photo and Digital Dialogue Cup" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover3.src} alt="Preparing test sheet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover4.src} alt="Asking questions to students" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover5.src} alt="Psyhcology test" />
        </SwiperSlide>
      </Swiper>
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
