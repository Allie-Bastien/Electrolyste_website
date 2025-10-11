
import '../globals.css';
import styles from './contact.module.css';
import ContactForm from "../../../components/ContactForm";

export const metadata = {
    title: "Contact | Allie Bastien",
    description: "Utilisez notre formulaire et je vous réponderai dès que possible",
  };

export default function Contact() {
    return <>
        <div className={styles.container}>
            <h1 className={styles.title}>Contactez-moi</h1>
            <p className={styles.subtitle}>Remplissez le formulaire ci-dessous pour m'envoyer un message.</p>
            <ContactForm />
        </div>

        <div className={styles.paragraph}>
        <p>Ou appelez moi au numéro suivant :</p>
        <h4>343-202-6440</h4>
        </div>
    </>
}