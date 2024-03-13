import React from 'react';
import { Post, PostProps } from '../../../../components/Post';

type PostPageProps = { searchParams: { postId: string } };

const PostPage = async (props: PostPageProps) => {
  const { searchParams } = props;
  const { postId } = searchParams;
  const post: PostProps = await fetch(
    `http://localhost:3000/api/posts?id=${postId}`
  )
    .then((response) => response.json()) //TODO: Change this to the actual API endpoint
    .catch((error) => console.error(error));

  return (
    <>
      <div style={{ backgroundColor: 'red', width: '50px' }}>{'<'}</div>
      <Post {...post} />
    </>
  );
};

export default PostPage;
