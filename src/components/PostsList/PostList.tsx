import Link from 'next/link';
import { makeSlug } from '@/utils';
import { PostProps } from '../Post';

export type PostListProps = {
  posts: PostProps[];
};

export const PostList: React.FC<PostListProps> = (props) => {
  const { posts } = props;

  //TODO: Maybe add a loading state (with a skeleton loader or something) for when the posts are being fetched
  //TODO: Maybe add an error state for when the posts fail to fetch

  return (
    <ul>
      {posts?.map((post) => (
        // TODO: Move this to a separate component
        <li key={post.id}>
          <Link
            key={post.id}
            className={`post_${post.id}`}
            href={{
              pathname: `/posts/${makeSlug([post.id])}`,
              ...(post ? { query: { postId: String(post.id) } } : {}),
            }}
          >
            {/* TODO: Remove this */}
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
