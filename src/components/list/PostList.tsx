/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IPostCard } from '../../typings';
import PostCard from '../cards/PostCard';
import Button from '../forms/Button';

interface Props {
  list: IPostCard[];
}

function PostList({ list }: Props): JSX.Element {
  const [active, setActive] = React.useState<boolean>(false);
  return (
    <div className={`post-list ${active ? 'active' : ''}`}>
      {list.map(({ id, ...item }) => (
        <PostCard key={id} {...item} />
      ))}
      <div className={`post-list__active ${active ? 'hide' : ''}`}>
        <Button type="button" onClick={() => setActive(true)}>
          More
        </Button>
      </div>
    </div>
  );
}

export default PostList;
