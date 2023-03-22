import React from 'react';
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
            <h2 className="event-promotion__title">
              Special Events & Promotional
            </h2>
            <h5 className="event-promotion__sub-title">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </h5>
          </div>
        </div>
        <div className="event-promotion__slide">
          <EventSlick list={list} />
        </div>
      </div>
    </article>
  );
}

export default EventAndPromotion;
