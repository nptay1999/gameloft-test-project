/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

import ExclusiveCard from '../cards/ExclusiveCard';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

interface Props {
  list: Array<{ id: number; img: string }>;
}

function ExclusiveSlick({ list }: Props): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    className: 'center',
    centerMode: true,
    centerPadding: '600px',
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow type="arrow" />,
    prevArrow: <SamplePrevArrow type="arrow" />,
    customPaging: function customPaging(i: number): JSX.Element {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <span className="slick-paging">
          <strong>
            {i < 9 ? '0' : ''}
            {i + 1}
          </strong>
          /{list.length}
        </span>
      );
    },
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '500px',
        },
      },
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '400px',
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '300px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '230px',
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '200px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="post-slick exclusive-slick">
      {list.map(({ id, ...props }) => (
        <ExclusiveCard key={id} {...props} />
      ))}
    </Slider>
  );
}

export default ExclusiveSlick;
