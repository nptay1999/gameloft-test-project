import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faEarthAmericas,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/imgs/layout/Gameloft_Logo_Flat_White_Line.png';
import Facebook from '../../assets/imgs/layout/facebook-icon.svg';
import Twitter from '../../assets/imgs/layout/twitter-icon.svg';
import Youtube from '../../assets/imgs/layout/youtube-icon.svg';
import Linkedin from '../../assets/imgs/layout/linkedin-icon.svg';
import FacebookBlue from '../../assets/imgs/layout/facebook-blue-icon.svg';
import TwitterBlue from '../../assets/imgs/layout/twitter-blue-icon.svg';
import YoutubeBlue from '../../assets/imgs/layout/youtube-blue-icon.svg';
import LinkedinBlue from '../../assets/imgs/layout/linkedin-blue-icon.svg';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <section className="footer__head">
        <div className="footer__social">
          <h5>Follow Us</h5>
          <div className="social-group">
            <a href="/#">
              <img src={FacebookBlue} alt="FacebookBlue" />
            </a>
            <a href="/#">
              <img src={LinkedinBlue} alt="LinkedinBlue" />
            </a>
            <a href="/#">
              <img src={TwitterBlue} alt="TwitterBlue" />
            </a>
            <a href="/#">
              <img src={YoutubeBlue} alt="YoutubeBlue" />
            </a>
          </div>
        </div>
      </section>
      <section className="footer__main">
        <div className="footer__container">
          <div>
            <img src={Logo} alt="logo" className="footer__logo" />
            <div className="footer__social">
              <h5>Follow Us</h5>
              <div className="social-group">
                <a href="/#">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="/#">
                  <img src={Linkedin} alt="Linkedin" />
                </a>
                <a href="/#">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="/#">
                  <img src={Youtube} alt="Youtube" />
                </a>
              </div>
            </div>
            <div className="footer__language">
              <FontAwesomeIcon icon={faEarthAmericas} />
              <select>
                <option value="en" selected>
                  English
                </option>
                <option value="vn">Vietnam</option>
              </select>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>

          <div>
            <div className="footer__list">
              <h5>Visit</h5>
              <ul>
                <li>
                  <a href="/#">Gameloft Games</a>
                </li>
                <li>
                  <a href="/#">Gameloft Careers</a>
                </li>
                <li>
                  <a href="/#">Gameloft News</a>
                </li>
                <li>
                  <a href="/#">Gameloft Forum</a>
                </li>
                <li>
                  <a href="/#">Gameloft Corporate</a>
                </li>
                <li>
                  <a href="/#">Gameloft Advertising</a>
                </li>
                <li>
                  <a href="/#">Gameloft Support</a>
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <h5>LEGAL</h5>
              <ul>
                <li>
                  <a href="/#">Terms of Use</a>
                </li>
                <li>
                  <a href="/#">Privacy Policy</a>
                </li>
                <li>
                  <a href="/#">Cookies Policy</a>
                </li>
                <li>
                  <a href="/#">EULA</a>
                </li>
                <li>
                  <a href="/#">Legal Notices</a>
                </li>
                <li>
                  <a href="/#">Event Rules</a>
                </li>
                <li>
                  <a href="/#">Business Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="footer__copyright">
        <div>
          <p>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
            are trademarks of Gameloft in the U.S. and/or other countries.
          </p>
          <p>
            All other trademarks are the property of their respective owners.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
