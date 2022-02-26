import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Hello <span>World</span>
      </h1>
    </div>
  )
}
