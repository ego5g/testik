import Header from '../components/Header';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import styles from '../styles/Landing.module.css';

export default function Page() {
  return (
    <div className={styles.landingPage}>
      <Header />
      <Hero />
      <Destinations />
      <Testimonials />
      <CTA />
    </div>
  );
}
