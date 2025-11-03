import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src='/logo.svg' alt="Logo" className={styles.logo} />
      <button className={styles.button}>
        <img src='/Primary.svg' alt="Primary" />
      </button>
    </header>
  );
}
