
import '../globals.css';
import styles from './contact.module.css';
import ContactForm from "../../../components/ContactForm";
import Header from '../../../Components/Header';

export const metadata = {
    title: "Contact | Pascale Legault - Électrolyste",
    description: "Utilisez notre formulaire et je vous réponderai dès que possible",
  };

export default function Contact() {
    return <>
    <div className={styles.page}>
    <header className={styles.header}>
        <Header/>
    </header>

    <main className={styles.main}>
    <div className={styles.container}>
        <h1 className={styles.title}>Contactez-moi</h1>
        <p className={styles.subtitle}>Remplissez le formulaire ci-dessous pour m'envoyer un message.</p>
        <ContactForm />
    </div>

    <div className={styles.paragraph}>
        <p>Ou appelez moi au numéro suivant :</p>
        <h4>819-743-9210</h4>
    </div>
    </main>
    </div>
</>
}