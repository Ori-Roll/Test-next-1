import Image from 'next/image';
import styles from './Post.module.css';

export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Post: React.FC<PostProps> = (props) => {
  const { userId, id, title, body } = props;
  //Todo: clean up the styles
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.userId}>{userId}</h2>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
    </div>
  );
};
