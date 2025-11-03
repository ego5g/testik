import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.hero}>
        <img src="/bghero.png" alt="background" className={styles.bg}></img>
        <img src="/im1.png" alt="background" className={styles.image} />
        <div className={styles.content}>
          <div className={styles.txt}>
            <h1 className={styles.title}>Unleash the Full Potential of Al</h1>
            <p className={styles.subtitle}>
              Curio App is a versatile assistant that utilizes state-of-the-art natural language processing to provide real-time support and assistance across various domains.
            </p>
          </div>
          <div className={styles.cta}>
            <button className={styles.button}>
              <img src="/Primary.svg" alt="Primary" />
            </button>
            <button className={styles.buttonSecondary}>
              <span className={styles.buttonText}>Check Out More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
