import styles from './Destinations.module.css';

export default function Destinations() {
  return (
    <section className={styles.destinations}>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h2 className={styles.title}>Different Destinations</h2>
          <p className={styles.subtitle}>
            We explore the diverse ways in which this technology can revolutionize work across various industries and fields. Discover how Al can streamline processes and elevate your work to new heights.
          </p>
        </div>
        <p className={styles.moreText}>And +50 other destinations</p>
      </div>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Students</h3>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Personal</h3>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Work</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
