import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  content: string;
  subContent: string;
  link: string;
  img: string;
}

function EventCard({ content, img, link, subContent }: Props): JSX.Element {
  return (
    <div className="event-card">
      <div className="event-card__bg">
        <img src={img} alt={content} />
      </div>
      <div className="event-card__filter" />
      <h5 className="event-card__title-default">{content}</h5>
      <div className="event-card__content">
        <div>
          <h5 className="event-card__content--title">{content}</h5>
          <div className="event-card__content--line" />
          <p className="event-card__content--subtitle">{subContent}</p>
        </div>
        <a href={link} className="event-card__btn">
          Read More
        </a>
      </div>
      <button type="button" className="event-card__share">
        <FontAwesomeIcon icon={faShareNodes} />
      </button>
    </div>
  );
}

export default EventCard;
