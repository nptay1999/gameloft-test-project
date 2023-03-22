import React from 'react';
import ExclusiveBg from '../../assets/imgs/slick/bg-exclusive.png';
import ExclusiveSlick from '../slick/ExclusiveSlick';

function ExclusiveContent(): JSX.Element {
  const list = [
    {
      id: 1,
      img: ExclusiveBg,
    },
    {
      id: 2,
      img: ExclusiveBg,
    },
    {
      id: 3,
      img: ExclusiveBg,
    },
    {
      id: 4,
      img: ExclusiveBg,
    },
    {
      id: 5,
      img: ExclusiveBg,
    },
    {
      id: 6,
      img: ExclusiveBg,
    },
    {
      id: 7,
      img: ExclusiveBg,
    },
    {
      id: 8,
      img: ExclusiveBg,
    },
    {
      id: 9,
      img: ExclusiveBg,
    },
    {
      id: 10,
      img: ExclusiveBg,
    },
  ];
  return (
    <article className="exclusive-content">
      <div>
        <div className="exclusive-content__wrapper">
          <div className="exclusive-content__container">
            <h2 className="exclusive-content__title">Exclusive Game Content</h2>
            <h5 className="exclusive-content__sub-title">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </h5>
          </div>
        </div>
        <div className="exclusive-content__slide">
          <ExclusiveSlick list={list} />
        </div>
      </div>
    </article>
  );
}

export default ExclusiveContent;
