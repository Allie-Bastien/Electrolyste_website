import styles from "./page.module.css";
import Entete from "../../Components/Entete";
import RDV from "../../Components/RDV";
import Faq from "../../Components/Faq";


export const metadata = {
  title: "Clarea Électrolyse",
  description:  "Électrolyse au microscope (microtrolyse) à Montréal. Traitement permanent pour tous types de poils, même les poils clairs ou résistants au laser. Consultation gratuite.",
  keywords: [
    "microtrolyse Montréal",
    "électrolyse Montréal",
    "électrolyse au microscope",
    "épilation définitive Montréal",
    "épilation permanente",
    "électrolyse poils blancs",
    "électrolyse poils clairs",
    "traitement pilosité hormonale",
    "SOPK épilation",
    "épilation transition de genre Montréal",
    "électrolyste Montréal",
    "Clarea microtrolyse",
  ],
  openGraph: {
    title: "Microtrolyse à Montréal – Électrolyse au microscope | Clarea",
    description:
      "Spécialiste en microtrolyse à Montréal. Électrolyse au microscope pour une épilation définitive, sécuritaire et précise – efficace sur tous les types de poils.",
    locale: "fr_CA",
    type: "website",
    siteName: "Clarea Microtrolyse",
  },
};



export default function Home() {    
  return (
    <div className={styles.page}>
      <header >
        <Entete/>
      </header>
      <main className={styles.main}>
        <img src="Image site (1).jpg" className={styles.banner}></img>
          <div className={styles.paragraphType4}>
            <h2 className={styles.title}>Qu’est-ce que l’électrolyse sous microscope?</h2>
            <div className={styles.paragraphType4}>
              <p className={styles.texteblack}> L’électrolyse détruit le follicule à la racine et empêche ainsi la repousse. Le microscope
                médical permet à l’électrolyste d’offrir ce service d’épilation permanente avec une
                précision maximale. 
              </p>
            </div>
          </div>
        <div className={styles.paragraphType1}>
            <h2 id="Électrolyse au microscope" className={styles.title2}>LES AVANTAGES</h2>

            <h3 className={styles.title3}>Résultats définitifs</h3>
            <p className={styles.texte}>Élimine de façon permanente la pilosité indésirable.</p>

            <h3 className={styles.title3}>Efficacité</h3>
            <p className={styles.texte}>Une méthode attentive pour traiter chaque poil séparément, en minimisant l’inconfort et
              l’irritation après le traitement.
            </p>
            <h3 className={styles.title3}>Sécurité</h3>
            <p className={styles.texte}>Méthode éprouvée sans dommage pour la peau, même sur les zones délicates.</p>

            <h3 className={styles.title3}>Efficacité</h3>
            <p className={styles.texte}>La seule méthode qui convient à tous les types de peaux et de poils, même ceux
              résistant à l’épilation laser.
            </p>
            <h2 id="Électrolyse au microscope" className={styles.title2}>Pourquoi choisir l'électrolyse?</h2>
            <p className={styles.texte}>Voici quelques situations fréquentes dans lesquelles l’électrolyse peut être recommandée :</p>
            <ul className={styles.liste}>
              <li>Pilosité liée à des changements hormonaux (grossesse, ménopause, SOPK/PCOS, hirsutisme et autres)</li>
              <li>Transition/affirmation de genre</li>
              <li>Poils incarnés, folliculites ou irritation dues au rasage / cire </li>
              <li>Finition après des traitements d'épilation au laser</li>
              <li>Contre-indications au laser (poils clairs, médication, phototypes non compatibles et autres)</li>
              <li>Pilosité génétique ou localisée (menton, lèvre, aréoles, etc.)</li>
              <li>Recherche d’un résultat permanent</li>
            </ul>
        </div>
        
          <div className={styles.section1}>
            <div id="APropos" className={styles.paragraphType2}>
              <h2 className={styles.title}>À PROPOS</h2>
              <p className={styles.texteblack}>J’ai développé une approche à la fois minutieuse et
                bienveillante, axée sur le confort et la confiance.
                Chaque séance est adaptée aux besoins du corps et
                au rythme de la personne. Mon objectif est d’offrir un
                espace où l’on se sent en sécurité, écouté et
                accompagné vers des résultats durables.
                 </p>
            </div>
            <div className={styles.main}>
              <img src="Pascale.jpg" alt="Logo Electrolyse" className={styles.logo} />
              <label className={styles.quote}>Pascale Legault, électrolyste certifiée</label>
            </div>
               <p className={styles.texteblack}>L’initiative de CLAREA – Épilation définitive a
                débuté en janvier 2023, et mon installation à la
                Clinique Néva depuis le 1er décembre 2025
                marque une étape importante dans cette évolution. Je
                suis vraiment emballée d’intégrer un milieu aussi
                positif, inclusif et chaleureux, qui reflète
                parfaitement ma vision et contribue à rehausser la
                qualité de l’expérience que j’offre à ma clientèle.
                </p>
                <img src="salle_traitement.jpg" alt="Logo Electrolyse" className={styles.logo} />
          </div>
          <div className={styles.paragraphType1}>
            <h2 id="FAQ" className={styles.title2}>Questions fréquentes</h2>

            <Faq></Faq>
          
            <h2 id="Tarifs" className={styles.title2}>Tarifs</h2>

            <ul className={styles.liste}>
              <li>15 min – 50$</li>
              <li>30 min – 60$</li>
              <li>45 min – 75$</li>
              <li>60 min – 90$</li>
            </ul>

            <p className={styles.texteSous}>La consultation est obligatoire, gratuite et sans engagement pour les nouveaux clients.</p>
            <p className={styles.texteItal}>*Les tarifs peuvent varier selon la zone, la durée ou la nature du soin. Certains
              traitements peuvent être refusés à la discrétion de l’électrolyste.
            </p>
        </div>


      <div id="Contact" className={styles.paragraphType3}>
        <h2 className={styles.title2}>Contact</h2>
        <ul>
          <li className={styles.infoliste}>
            <label className={styles.infoName}>Courriel </label>
            <label className={styles.texte}>clarea.epilation@gmail.com</label>
          </li>
          <li className={styles.infoliste}>
            <label className={styles.infoName}>Texte/appel : </label>
            <label className={styles.texte}>819-743-9210</label>
          </li>
          <li className={styles.infoliste}>
            <label className={styles.infoName}>Adresse </label>
            <label className={styles.texte}>1121 Rue de Bellechasse, Montréal, QC H2S 1Y5 (Clinique Neva)</label>
          </li>
        </ul>
        <h2 className={styles.title2}>Disponibilité</h2>
        <label className={styles.infoDesc}>*Par rendez-vous seulement  </label>
        <ul>
          <li className={styles.texte}>Lundi : 17 h à 22 h</li>
          <li className={styles.texte}>Jeudi : 17 h à 22 h</li>
          <li className={styles.texte}>Samedi : 11 h à 18 h</li>
        </ul>
      </div>

      <div className={styles.containerRdv}>
        <RDV></RDV>
      </div>

    </main>
    <footer className={styles.footer}>
        
    </footer>
  </div>
  );
}
