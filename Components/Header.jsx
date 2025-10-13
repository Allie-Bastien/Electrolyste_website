'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Menu from "./Menu";

export default function Header() {

  return <>
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Électrolyse Pascale Legault</h1>
        <Menu />
        </div>
    </header>
  </>;
}