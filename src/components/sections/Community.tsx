import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import CardBg from '../../assets/imgs/slick/bg-post.png';
import Twitter from '../../assets/imgs/page/twitter.svg';
import Instagram from '../../assets/imgs/page/instagram.svg';
import Facebook from '../../assets/imgs/page/facebook.svg';
import StorySlick from '../slick/StorySlick';
import PostSlick from '../slick/PostSlick';
import PostList from '../list/PostList';

function Community(): JSX.Element {
  const list = [
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 3,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 4,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 5,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 6,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 7,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 8,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 9,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
    {
      id: 10,
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
      type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
      link: '/#',
      img: CardBg,
    },
  ];
  return (
    <article className="community">
      <div className="community__container">
        <h2 className="community__title">Game Community Hub</h2>
        <section className="community__story">
          <h3 className="community__story--title">Live Game Updates</h3>
          <div className="community__story--content">
            <StorySlick />
          </div>
        </section>
        <section className="community__post">
          <div className="community__post--head">
            <h3 className="community__post--title">All Posts</h3>
            <div className="community__post--social">
              <img src={Twitter} alt="twitter" />
              <img src={Instagram} alt="instagram" />
              <img src={Facebook} alt="facebook" />
            </div>
            <div className="community__post--search">
              <input type="text" placeholder="search" />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className="community__post--content">
            <PostSlick list={list} />
            <PostList list={list} />
          </div>
        </section>
      </div>
    </article>
  );
}

export default Community;
