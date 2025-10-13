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

      

      {open && (
        <div className={styles.menu}>
          <Link href="/" className={styles.menuItem}>
            Accueil
          </Link>
          <Link href="Rendez-Vous" className={styles.menuItem}>
            Prendre Un Rendez-Vous
          </Link>
          <Link href="Contact" className={styles.menuItem}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}