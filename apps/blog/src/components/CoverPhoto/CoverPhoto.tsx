import React from 'react';
import { StaticImageData } from 'next/image';
import styled from '@emotion/styled';
import { Navigation } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Cover3 from '../../../assets/cover3.jpg';
import Cover4 from '../../../assets/cover4.jpg';
import Cover5 from '../../../assets/cover5.jpg';
import Cover6 from '../../../assets/n1.jpg';
import Cover7 from '../../../assets/n2.jpg';
import Cover8 from '../../../assets/n3.jpg';
import Cover9 from '../../../assets/n4.jpg';
import Cover10 from '../../../assets/n5.jpg';

// Import Swiper styles
/* eslint-disable import/no-unresolved */
import 'swiper/css';
/* eslint-disable import/no-unresolved */
import 'swiper/css/navigation';

type Props = {
  imgSrc: StaticImageData;
  text: string;
};

const CoverPhoto: React.FC<Props> = ({ imgSrc, text }) => {
  const photos = [imgSrc, Cover3, Cover4, Cover5, Cover6, Cover7, Cover8, Cover9, Cover10];

  return (
    <CoverWrapper>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {photos.map((el: StaticImageData, idx: number) => (
          <SwiperSlide key={idx}>
            <img src={el.src} alt="Cover photo" />
          </SwiperSlide>
        ))}
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
