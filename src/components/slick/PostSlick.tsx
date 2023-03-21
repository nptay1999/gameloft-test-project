/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { IPostCard } from '../../typings';

import PostCard from '../cards/PostCard';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

interface Props {
  list: IPostCard[];
}

function PostSlick({ list }: Props): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow type="arrow" />,
    prevArrow: <SamplePrevArrow type="arrow" />,
    customPaging: function customPaging(i: number): JSX.Element {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <span className="slick-paging">
          <strong>{i + 1}</strong>/{list.length}
        </span>
      );
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="post-slick">
      {list.map(({ id, ...item }) => (
        <PostCard key={id} {...item} />
      ))}
    </Slider>
  );
}

export default PostSlick;
