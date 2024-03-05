import styles from './page.module.css';
import { TopMenu } from '../components/TopMenu/TopMenu';

export default function Home() {
  return (
    <main className={styles.main}>
      <TopMenu />
      <div>This is new</div>
    </main>
  );
}
