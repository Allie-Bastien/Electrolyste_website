"use client"
import { useState } from "react";
import Link from "next/link";
import styles from './Menu.module.css';

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <img src="Menu.png" alt="Menu Icon" className={styles.boutonMenu}
        onClick={() => setOpen(!open)}
        
      />
      
        <div className={`${open ? styles.open : styles.menu}`}>
          <Link href="/#Elec" className={styles.menuItem} onClick={open ? () => setOpen(false) : null}>
            L'électrolyse
          </Link>
          <Link href="/#Laser" className={styles.menuItem} onClick={open ? () => setOpen(false) : null}>
            L'épilation au laser
          </Link>
          <Link href="/#FAQ" className={styles.menuItem} onClick={open ? () => setOpen(false) : null}>
            Questions/Réponses
          </Link>
          <Link href="/#Tarifs" className={styles.menuItem} onClick={open ? () => setOpen(false) : null}>
            Tarifs
          </Link>
          <Link href="/#APropos" className={styles.menuItem} onClick={open ? () => setOpen(false) : null}>
            À propos
          </Link>
          <Link href="/#Contact" className={styles.menuItem} onClick={open ? () => setOpen(false) : null}>
            Contact
          </Link>
          <div
            data-professionalpagename=""
            data-bookingwidgeturlparams="companyId=140158"
            data-language="fr"
            data-label="Prendre un rendez-vous"
            data-url="https://www.gorendezvous.com/"
            className="gorendezvous-button"
            data-buttoncolor=""
            data-width="280px"
            data-height="50px"
          >
            <a
              href="https://www.gorendezvous.com/homepage/140158?companyId=140158"
              target="GOrendezvous"
            >
            Prendre un rendez-vous
          </a>
        </div>
          
        </div>
      
    </div>
  );
}