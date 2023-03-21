import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Facebook from '../../assets/imgs/slick/facebook.png';

interface Props {
  content: string;
  type: 'facebook' | 'twitter' | 'instagram';
  link: string;
  img: string;
}

function PostCard({ content, type, link, img }: Props): JSX.Element {
  return (
    <div className="post-card">
      <div className="post-card__bg">
        <img src={img} alt={content} />
      </div>
      <div className="post-card__social">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={Facebook}
            alt={
              // eslint-disable-next-line no-nested-ternary
              type === 'facebook'
                ? 'facebook'
                : type === 'twitter'
                ? 'twitter'
                : 'instagram'
            }
            className="post-card__social--link"
          />
        </a>
        <button type="button" className="post-card__social--share">
          <FontAwesomeIcon icon={faShareNodes} />
        </button>
      </div>
      <p className="post-card__content">{content}</p>
    </div>
  );
}

export default PostCard;
