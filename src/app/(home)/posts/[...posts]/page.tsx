import React from 'react';
import { Post, PostProps } from '../../../../components/Post';

type PostPageProps = { searchParams: any };

const PostPage = async (props: PostPageProps) => {
  const { searchParams } = props;
  const { postId } = searchParams;
  const post: PostProps = await fetch(
    `http://localhost:3000/api/posts?id=${postId}`
  )
    .then((response) => response.json()) //TODO: Change this to the actual API endpoint
    .catch((err) => console.error(err));

  return (
    <>
      <div style={{ backgroundColor: 'red', width: '50px' }}>{'<'}</div>
      <Post {...post} />
    </>
  );
};

export default PostPage;
