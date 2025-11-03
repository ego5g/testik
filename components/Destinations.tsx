import styles from './Destinations.module.css';

const destinations = [
  {
    name: 'Students',
    image: '/Card1.png'
  },
  {
    name: 'Professionals',
    image: '/Card2.png'
  },
  {
    name: 'Writers',
    image: '/Card3.png'
  }
];

export default function Destinations() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Different Destinations</h2>
          <p className={styles.description}>
            We explore the diverse ways in which this technology can revolutionize work across various industries and fields. Discover how Al can streamline processes and elevate your work to new heights.
          </p>
        </div>
        <div className={styles.note}>And +50 other destinations</div>
      </div>
      <div className={styles.cards}>
        {destinations.map((dest) => (
          <div key={dest.name} className={styles.card} style={{ backgroundImage: `url(${dest.image})` }}>
            <div className={styles.cardLabel}>
              <h3 className={styles.cardTitle}>{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}