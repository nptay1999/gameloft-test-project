/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

import StoryCard from '../cards/StoryCard';
import Img1 from '../../assets/imgs/slick/Mask Group 222.png';
import Img2 from '../../assets/imgs/slick/Mask Group 224.png';
import Img3 from '../../assets/imgs/slick/Mask Group 227.png';
import Img4 from '../../assets/imgs/slick/Mask Group 228.png';
import Img5 from '../../assets/imgs/slick/Mask Group 229.png';
import Img6 from '../../assets/imgs/slick/Mask Group 230.png';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

function StorySlick(): JSX.Element {
  const list = [
    {
      id: 1,
      title: 'Short title',
      link: '/#',
      img: Img1,
    },
    {
      id: 2,
      title: 'Short title',
      link: '/#',
      img: Img2,
    },
    {
      id: 3,
      title: 'Short title',
      link: '/#',
      img: Img3,
    },
    {
      id: 4,
      title: 'Short title',
      link: '/#',
      img: Img4,
    },
    {
      id: 5,
      title: 'Short title',
      link: '/#',
      img: Img5,
    },
    {
      id: 6,
      title: 'Short title',
      link: '/#',
      img: Img6,
    },
    {
      id: 7,
      title: 'Short title',
      link: '/#',
      img: Img6,
    },
    {
      id: 8,
      title: 'Short title',
      link: '/#',
      img: Img6,
    },
    {
      id: 9,
      title: 'Short title',
      link: '/#',
      img: Img6,
    },
    {
      id: 10,
      title: 'Short title',
      link: '/#',
      img: Img6,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="story-slick">
      {list.map(({ id, ...item }) => (
        <StoryCard key={id} {...item} />
      ))}
    </Slider>
  );
}

export default StorySlick;
