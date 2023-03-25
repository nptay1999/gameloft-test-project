import React from 'react';
import { InView } from 'react-intersection-observer';

import { IEventCard } from '../../typings';
import EventSlick from '../slick/EventSlick';
import BgCard from '../../assets/imgs/slick/Rectangle 2184.png';

function EventAndPromotion(): JSX.Element {
  const list: IEventCard[] = [
    {
      id: 1,
      content: 'short title here',
      subContent:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
      img: BgCard,
      link: '/#',
    },
    {
      id: 2,
      content: 'short title here',
      subContent:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
      img: BgCard,
      link: '/#',
    },
    {
      id: 3,
      content: 'short title here',
      subContent:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
      img: BgCard,
      link: '/#',
    },
    {
      id: 4,
      content: 'short title here',
      subContent:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
      img: BgCard,
      link: '/#',
    },
    {
      id: 5,
      content: 'short title here',
      subContent:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
      img: BgCard,
      link: '/#',
    },
  ];
  return (
    <article className="event-promotion">
      <div>
        <div className="event-promotion__wrapper">
          <div className="event-promotion__container">
            <InView>
              {({ inView, ref }) => (
                <h2
                  ref={ref}
                  className={`event-promotion__title animate-element ${
                    inView ? 'animate-up' : 'animate-down'
                  }`}
                >
                  Special Events & Promotional
                </h2>
              )}
            </InView>

            <InView>
              {({ inView, ref }) => (
                <h5
                  ref={ref}
                  className={`event-promotion__sub-title animate-element transition-delay-1 ${
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
              className={`event-promotion__slide animate-element transition-delay-2 ${
                inView ? 'animate-up' : 'animate-down'
              }`}
            >
              <EventSlick list={list} />
            </div>
          )}
        </InView>
      </div>
    </article>
  );
}

export default EventAndPromotion;
