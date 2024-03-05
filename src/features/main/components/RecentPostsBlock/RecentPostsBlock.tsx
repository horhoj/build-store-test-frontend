import styles from './RecentPostsBlock.module.scss';
import { RecentPostsData } from './RecentPostsBlockData';

interface RecentPostsBlockProps {
  children?: React.ReactNode;
}
export function RecentPostsBlock({ children }: RecentPostsBlockProps) {
  return (
    <div className={styles.RecentPostsBlock}>
      <div className={styles.title}>Recent posts</div>
      <div className={styles.postList}>
        {RecentPostsData.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postTitle}>{post.title}</div>
            <div className={styles.postInfo}>
              <div>{post.date}</div>
              <div>{'|'}</div>
              <div>{post.description}</div>
            </div>
            <div>{post.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
