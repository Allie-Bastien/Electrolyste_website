import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Politique de confidentialité | Clinique Clarea",
  description: "Découvrez notre politique de confidentialité",
};

export default function Confidentialite() {
  return <>
    <main className={styles.main}>
      <div className={styles.container}> 
      <h1 className={styles.title}>Politique de confidentialité</h1>
      <label className={styles.label}>Dernière mise à jour : 13 août 2026</label>
      <p className={styles.paragraph}>Clarea recueille, notamment par GOrendezvous et par courriel, 
        uniquement les renseignements nécessaires à ses activités : nom, coordonnées, 
        renseignements liés aux rendez-vous, aux consultations, aux traitements et aux paiements.
      </p>
      <p className={styles.paragraph}>Ces renseignements servent à communiquer avec la clientèle, 
        gérer les rendez-vous et les dossiers, fournir les traitements, traiter les paiements et respecter les obligations applicables.
      </p>
      <p className={styles.paragraph}>Ils sont accessibles uniquement à Clarea et aux fournisseurs nécessaires à ses activités, 
        notamment GOrendezvous et les services de paiement. Certains fournisseurs peuvent traiter 
        des renseignements à l’extérieur du Québec. Les services externes intégrés au site, comme Google Maps,
         appliquent également leurs propres politiques de confidentialité.
      </p>
      <p className={styles.paragraph}>Des mesures raisonnables sont prises pour protéger les renseignements.
         Ceux-ci sont conservés uniquement pendant la période nécessaire,
          puis détruits ou anonymisés de façon sécuritaire.
      </p>
      <p className={styles.paragraph}>Vous pouvez demander l’accès à vos renseignements,
         leur correction, retirer votre consentement lorsque la loi le permet ou formuler une plainte en communiquant avec la responsable :
      </p>
      <label className={styles.label}>Pascale Legault</label>
      <label className={styles.label}>Responsable de la protection des renseignements personnels</label>
      <Link className={styles.label} href="mailto:clarea.epilation@gmail.com">clarea.epilation@gmail.com</Link>
         
      <label className={styles.label}>Toute modification importante à cette politique sera indiquée sur cette page.</label>
      <Link style={{   fontWeight: 'bold', marginTop: '20px' , textAlign: 'center', justifyContent: 'center'}} href="/">Retour à l'accueil</Link>
      </div>
    </main>
  </>
}