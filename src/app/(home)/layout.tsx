import styles from './home.module.css';
import { TopNavBar } from '@/components/TopNavBar';

type HomeProps = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<HomeProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.main}>
      <TopNavBar />
      {children}
    </div>
  );
};

export default HomeLayout;
