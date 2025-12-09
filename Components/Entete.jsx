'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./Entete.module.css";
import Menu from "./Menu";

export default function Entete() {

  return <>
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.titleContainer}>
          <img alt="Logo" src="clarea.png" className={styles.Logo}/>
        </div>
          <div className={styles.titleContainer}>
            <button className={styles.langueButton}>EN</button>
            <Menu />
          </div>
        </div>
    </div>
  </>;
}