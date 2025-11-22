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
          <img alt="Logo" src="LogoClarea.png" className={styles.Logo}/>
          <img alt="clarea" src="clarea.png" className={styles.logotexte}/>
        </div>
        <Menu />
        </div>
    </div>
  </>;
}