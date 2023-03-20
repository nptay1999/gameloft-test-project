import React from 'react';
import { ReactComponent as Share } from '../../assets/imgs/layout/share-icon.svg';
import { ReactComponent as Phone } from '../../assets/imgs/layout/phone-icon.svg';
import { ReactComponent as Mail } from '../../assets/imgs/layout/mail-icon.svg';

function SocialIcons(): JSX.Element {
  return (
    <div className="social-icons">
      <button type="button" className="social-icons__item">
        <Share className="share" />
      </button>
      <button type="button" className="social-icons__item">
        <Mail className="mail" />
      </button>
      <button type="button" className="social-icons__item">
        <Phone className="phone" />
      </button>
    </div>
  );
}

export default SocialIcons;
