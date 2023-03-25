import React from 'react';
import { InView } from 'react-intersection-observer';
import HeroBg from '../../assets/imgs/page/bg-hero.png';
import NintendoEshop from '../../assets/imgs/page/NintendoEshop.png';
import Microsoft from '../../assets/imgs/page/Microsoft.png';
import Steam from '../../assets/imgs/page/steam.png';
import StarRank from '../utils/StarRank';

function Hero(): JSX.Element {
  return (
    <div className="hero">
      <img src={HeroBg} alt="backgroundImage" className="hero__bg" />
      <div className="hero__description">
        <div className="hero__description--container">
          <InView>
            {({ inView, ref }) => (
              <h2
                ref={ref}
                className={`animate-element ${
                  inView ? 'animate-up' : 'animate-down'
                }`}
              >
                Gameloft game
              </h2>
            )}
          </InView>

          <InView>
            {({ inView, ref }) => (
              <span
                ref={ref}
                className={`sub-title animate-element transition-delay-1 ${
                  inView ? 'animate-up' : 'animate-down'
                }`}
              >
                <span>Racing / Action</span>
                |
                <StarRank />
              </span>
            )}
          </InView>

          <InView>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`animate-element transition-delay-2 ${
                  inView ? 'animate-up' : 'animate-down'
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud itation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit... Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud itation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit...
              </p>
            )}
          </InView>
        </div>
      </div>
      <div className="store-buttons animate-element transition-delay-3 animate-up">
        <div className="store-buttons__container">
          <h4>Download latest version</h4>
          <div className="store-buttons__container--buttons">
            <button type="button">
              <img src={NintendoEshop} alt="NintendoEshop" />
            </button>
            <button type="button">
              <img src={Microsoft} alt="Microsoft" />
            </button>
            <button type="button">
              <img src={Steam} alt="Steam" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
