import React from 'react';
import { InView } from 'react-intersection-observer';

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
            <InView>
              {({ inView, ref }) => (
                <h2
                  ref={ref}
                  className={`exclusive-content__title animate-element ${
                    inView ? 'animate-up' : 'animate-down'
                  }`}
                >
                  Exclusive Game Content
                </h2>
              )}
            </InView>

            <InView>
              {({ inView, ref }) => (
                <h5
                  ref={ref}
                  className={`exclusive-content__sub-title animate-element transition-delay-1 ${
                    inView ? 'animate-up' : 'animate-down'
                  }`}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam
                </h5>
              )}
            </InView>
          </div>
        </div>
        <InView>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`exclusive-content__slide animate-element transition-delay-2 ${
                inView ? 'animate-up' : 'animate-down'
              }`}
            >
              <ExclusiveSlick list={list} />
            </div>
          )}
        </InView>
      </div>
    </article>
  );
}

export default ExclusiveContent;
