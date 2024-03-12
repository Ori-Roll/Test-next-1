'use server';

import React from 'react';
import { PostList } from '@/components/PostsList';
import { PostProps } from '@/components/Post';

type PostsProps = {};

const Posts: React.FC<PostsProps> = async () => {
  const posts = await fetch('http://localhost:3000/api/posts')
    .then((response) => response.json())
    //TODO: Change this to the actual API endpoint
    .catch((err) => console.log(err));

  return (
    <div>
      <h1>Posts Page</h1>
      <p>This is the posts page</p>
      {(posts as unknown as PostProps[]) ? (
        <PostList posts={posts as unknown as PostProps[]} />
      ) : null}
    </div>
  );
};

export default Posts;

// async function getData() {
//   // const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
//   //   .then((response) => response.json())
//   //   .then((json) => console.log(json));

//   return posts;
// }
