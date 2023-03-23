/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

import { IEventCard } from '../../typings';
import EventCard from '../cards/EventCard';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

function CustomPaging(i: number): JSX.Element {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div className="slick-paging">
      <div>
        <svg>
          <circle cx="21" cy="21" r="19" />
          <circle cx="21" cy="21" r="19" />
        </svg>
      </div>
      <span>{i + 1}</span>
    </div>
  );
}

interface Props {
  list: IEventCard[];
}

function EventSlick({ list }: Props): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    className: 'center',
    centerMode: true,
    centerPadding: '300px',
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow type="arrow" />,
    prevArrow: <SamplePrevArrow type="arrow" />,
    customPaging: CustomPaging,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '200px',
        },
      },
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '130px',
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '400px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '280px',
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '230px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '200px',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',
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
          centerPadding: '0px',
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="event-slick">
      {list.map(({ id, ...props }) => (
        <EventCard key={id} {...props} />
      ))}
    </Slider>
  );
}

export default EventSlick;
