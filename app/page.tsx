import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Landing.module.css';

export default function Page() {
  return (
    <div className={styles.landingPage}>
      <Header />
      <Hero />
    </div>
  );
}
