import React from 'react';

interface Props {
  title: string;
  link: string;
  img: string;
}

function StoryCard({ title, link, img }: Props): JSX.Element {
  return (
    <div className="story-card">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="story-card__img">
          <img src={img} alt={title} />
        </div>
      </a>
      <h5 className="story-card__title">{title}</h5>
    </div>
  );
}

export default StoryCard;
