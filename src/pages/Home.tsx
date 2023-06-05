import { useEffect, useState } from 'react';
import { getPostList } from '../api';
import PostListItem from '../components/PostListItem';
import { IResponsePostList, TAG } from '../api/types';
import NoPostList from '../components/NoPostList';

const list = [
  {
    post: {
      id: 1,
      title: '1번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 2,
      title: '2번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 3,
      title: '3번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
];

const Home = () => {
  const [posts, setPosts] = useState<IResponsePostList>([]);

  const fetchPostList = async () => {
    const {data} = await getPostList();
    setPosts(data);
  };

  useEffect(()=> {
    fetchPostList();
  }, []);

  if (posts.length === 0) {
    return <NoPostList />;
  }
  return (
    <div>
      {posts.map(item => (
        <PostListItem key={item.post.id} {...item.post} />
      ))}
    </div>
  );
};

export default Home;
