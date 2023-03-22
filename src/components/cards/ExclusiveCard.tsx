import React from 'react';
import DownloadIcon from '../../assets/imgs/icons/download-icon.svg';

function ExclusiveCard({ img }: { img: string }): JSX.Element {
  return (
    <div className="exclusive-card">
      <img src={img} alt={img} className="exclusive-card__img" />
      <a href={img} download type="button" className="exclusive-card__btn">
        <img src={DownloadIcon} alt="DownloadIcon" />
      </a>
    </div>
  );
}

export default ExclusiveCard;
