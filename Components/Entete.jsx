'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./Entete.module.css";
import Menu from "./Menu";

export default function Entete() {

  return <>
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img src="LogoClarea.png" width={90} height={90} />
          <img src="Clarea.png" width={200} height={50} />
        </div>
        <Menu />
        </div>
    </div>
  </>;
}