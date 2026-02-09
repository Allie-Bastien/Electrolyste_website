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
          <Image alt="Logo" src="clarea.jpg" className={styles.Logo}/>
        </div>
          <div className={styles.titleContainer}>
           {false == <button className={styles.langueButton}>EN</button>}
            <Menu />
          </div>
        </div>
    </div>
  </>;
}