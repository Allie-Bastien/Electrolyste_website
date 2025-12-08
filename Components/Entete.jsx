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
          <img alt="Logo" src="LogoClarea.png" className={styles.Logo}/>
          <div className={styles.logoContainer}>
            <img alt="clarea" src="clarea.png" className={styles.logotexte}/>
            <label className={styles.texte}>Épilation définitive │ Électrolyse de précision</label>
          </div>
        </div>
          <div className={styles.titleContainer}>
            <button className={styles.langueButton}>EN</button>
            <Menu />
          </div>
        </div>
    </div>
  </>;
}