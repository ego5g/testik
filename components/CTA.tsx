import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.content}>
        <div className={styles.bg}></div>
        <div className={styles.image}></div>
        <div className={styles.contentContainer}>
          <div className={styles.text}>
            <h2 className={styles.title}>Try It Right Now</h2>
            <p className={styles.subtitle}>
              Download the Curio on the AppStore and Google Play and discover the world of artificial intelligence! Enjoy innovative Al technologies directly on your device.
            </p>
          </div>
          <div className={styles.buttons}>
            <img src="/appstore.png" alt="App Store" />
            <img src="/googleplay.svg" alt="Google Play" />
          </div>
        </div>
      </div>
    </section>
  );
}
