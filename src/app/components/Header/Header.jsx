import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ showSubtitle = true }) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <img src="/images/Logo.svg" alt="Fish Eye Logo" className={styles.logo}/>
      </Link>
      {showSubtitle && <h1 className={styles.subtitle}>Nos photographes</h1>}
    </header>
  );
}
