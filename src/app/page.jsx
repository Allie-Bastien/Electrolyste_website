import styles from "./page.module.css";
import Header from "../../Components/Header";
import ContactForm from "../../Components/ContactForm";


export const metadata = {
  title: "Pascale Leagult - Électrolyste",
  description: "Session d'épilation par Électrolyse disponible",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Header/>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue chez Électrolyse Pascale Legault</h1>
        <img src="Image1.png" alt="Logo Electrolyse" className={styles.logo} />
        <h2 className={styles.title}>Qu'est ce que l'épilation par électrolyse?</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        <div className={styles.imageContainer}>
          <img src="Image_Studio_1.png" alt="Image Studio 1" className={styles.image} />
          <img src="Image_Studio_2.png" alt="Image Studio 2" className={styles.image} />
          <img src="Image_Studio_3.png" alt="Image Studio 3" className={styles.image} />
        </div>
        <h2 className={styles.title}>Les services offert par Pascale</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className={styles.container}>
        <h1 className={styles.title}>Prendre un rendez-Vous</h1>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Contactez-moi</h1>
        <p className={styles.subtitle}>Remplissez le formulaire ci-dessous pour m'envoyer un message.</p>
        <ContactForm />
     </div>

      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
