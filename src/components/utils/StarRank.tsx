import React from 'react';
import { ReactComponent as StarFull } from '../../assets/imgs/page/star-full.svg';
import { ReactComponent as Star } from '../../assets/imgs/page/star.svg';

function StarRank(): JSX.Element {
  return (
    <div className="star-rank">
      <span>
        <StarFull />
      </span>
      <span>
        <StarFull />
      </span>
      <span>
        <StarFull />
      </span>
      <span>
        <StarFull />
      </span>
      <span>
        <Star />
      </span>
    </div>
  );
}

export default StarRank;
