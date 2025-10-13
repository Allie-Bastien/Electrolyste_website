
import '../globals.css';
import styles from './Rendez-Vous.module.css';
import Header from '../../../Components/Header';

export const metadata = {
    title: "Prendre un Rendez-Vous | Pascale Legault - Électrolyste",
    description: "Utilisez notre formulaire et je vous réponderai dès que possible",
  };

export default function Rendez_Vous() {
    return <>
    <div className={styles.page}>
    <header className={styles.header}>
        <Header/>
    </header>

    <main className={styles.main}>
    <div className={styles.container}>
        <h1 className={styles.title}>Prendre un rendez-Vous</h1>
    </div>

    </main>
    </div>
</>
}