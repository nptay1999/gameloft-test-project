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

interface ICommunity {
  id: number;
  content: string;
  type: 'facebook' | 'twitter' | 'instagram';
  link: string;
  img: string;
}

const list = [
  {
    id: 1,
    content:
      'Lorem facebook ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 2,
    content:
      'Lorem facebook ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 3,
    content:
      'Lorem facebook ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'facebook' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 4,
    content:
      'Lorem twitter ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'twitter' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 5,
    content:
      'Lorem twitter ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'twitter' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 6,
    content:
      'Lorem twitter ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'twitter' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 7,
    content:
      'Lorem instagram ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'instagram' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 8,
    content:
      'Lorem instagram ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'instagram' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 9,
    content:
      'Lorem instagram ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'instagram' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
  {
    id: 10,
    content:
      'Lorem instagram ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
    type: 'instagram' as 'facebook' | 'twitter' | 'instagram',
    link: '/#',
    img: CardBg,
  },
];

function Community(): JSX.Element {
  const searchRef = React.useRef<any>(null);
  const [showList, setShowList] = React.useState<ICommunity[]>(list);
  const filterList = (filter: string): void => {
    if (filter === 'facebook') {
      const listFilter = list.filter((item) => item.type === 'facebook');
      setShowList(listFilter);
    } else if (filter === 'twitter') {
      const listFilter = list.filter((item) => item.type === 'twitter');
      setShowList(listFilter);
    } else if (filter === 'instagram') {
      const listFilter = list.filter((item) => item.type === 'instagram');
      setShowList(listFilter);
    } else {
      setShowList(list);
    }
  };
  const filterAction = (keyword: string): void => {
    const listFilter = list.filter((item) => item.content.includes(keyword));
    setShowList(listFilter);
  };
  const enterSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      const keyword = searchRef.current.value;
      filterAction(keyword);
      searchRef.current.value = '';
    }
  };
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
            <h3
              className="community__post--title"
              onClick={() => filterList('')}
              aria-hidden="true"
            >
              All Posts
            </h3>
            <div className="community__post--social">
              <img
                src={Twitter}
                alt="twitter"
                onClick={() => filterList('twitter')}
                aria-hidden="true"
              />
              <img
                src={Instagram}
                alt="instagram"
                onClick={() => filterList('instagram')}
                aria-hidden="true"
              />
              <img
                src={Facebook}
                alt="facebook"
                onClick={() => filterList('facebook')}
                aria-hidden="true"
              />
            </div>
            <div className="community__post--search">
              <input
                type="text"
                placeholder="search"
                ref={searchRef}
                onKeyUp={enterSearch}
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className="community__post--content">
            <PostSlick list={showList} />
            <PostList list={showList} />
          </div>
        </section>
      </div>
    </article>
  );
}

export default Community;
