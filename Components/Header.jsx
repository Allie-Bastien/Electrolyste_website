'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {

  return <>
    <header className={styles.header}>
      {/* Navigation principale */}
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="ThriveToday Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Menu de navigation */}
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>
              Accueil
            </Link>
          
          </li>
        </ul>
      </nav>
      {/* Bannière */}
      <Banner />
    </header>
  </>;
}