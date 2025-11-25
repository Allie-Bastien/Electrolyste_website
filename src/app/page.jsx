import styles from "./page.module.css";
import Entete from "../../Components/Entete";
import RDV from "../../Components/RDV";


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
        <div className={styles.banner}>
            <label className={styles.subtitle}>Électrolyse de précision sous microscope</label>
            <label className={styles.subtitle2}>Une approche avancée qui mise sur la finesse du geste et des résultats durables.</label>
          </div>
        <div className={styles.section1}>
          <div >
            <h2 className={styles.title}>Qu’est-ce que l’électrolyse sous microscope?</h2>
            <div className={styles.paragraphType4}>
              <p className={styles.texteblack}> L’électrolyse détruit chaque poil directement à la racine, empêchant ainsi la repousse. 
              L’usage d’un microscope médical permet des insertions d’une précision exceptionnelle, améliorant le confort, l’efficacité et la sécurité du traitement.  </p>
            </div>
            <div className={styles.quoteContainer}>
              <p className={styles.quote}>Cette technique est aussi appelée </p>
              <p className={styles.quoteBold}> microtrolyse.</p>
            </div>
          </div>
          <img src="Pascale.jpg" alt="Logo Electrolyse" className={styles.logo} />
        </div>
        <div className={styles.paragraphType1}>
            <h2 id="Électrolyse au microscope" className={styles.title2}>LES AVANTAGES DE LA MICROTROLYSE</h2>

            <h3 className={styles.title3}>Résultats définitifs</h3>
            <p className={styles.texte}>Élimine de façon permanente la pilosité indésirable.</p>

            <h3 className={styles.title3}>Efficacité</h3>
            <p className={styles.texte}>La seule méthode qui convient à tous les types de peaux et de poils, même ceux résistant à l’épilation laser.</p>

            <h3 className={styles.title3}>Précision</h3>
            <p className={styles.texte}>Une approche méticuleuse pour traiter chaque poil individuellement en limitant l’inconfort et l’irritation post-traitement.</p>

            <h3 className={styles.title3}>Sécurité</h3>
            <p className={styles.texte}>Méthode éprouvée, réalisée avec précision pour protéger l’intégrité de la peau..</p>

            <p className={styles.texte}>Voici quelques situations fréquentes dans lesquelles l’électrolyse peut être recommandée :</p>
            <ul className={styles.liste}>
              <li>Pilosité liée à des changements hormonaux (grossesse, ménopause, SOPK/PCOS, hirsutisme et autres)</li>
              <li>Transition/affirmation de genre</li>
              <li>Poils incarnés, folliculites ou irritation dues au rasage / cire </li>
              <li>Finition après traitements laser</li>
              <li> Contre-indications au laser (poils clairs, médication, phototypes non compatibles et autres)</li>
              <li>Pilosité génétique ou localisée (menton, lèvre, aréoles, etc.)</li>
              <li>Recherche d’un résultat permanent</li>
            </ul>

            <p className={styles.texte}>Une approche minutieuse qui augmente le taux de destruction du poil tout en minimisant l’irritation. C’est ce que vous obtiendrez chez Clarea.</p>
       
            <h2 id="FAQ" className={styles.title2}>Questions fréquentes</h2>

            <div className={styles.listeQuestion}>
                <div className={styles.question}>
                  <label>⌄  Q: Est‑ce vraiment permanent ?</label>
                  <label>R: Oui, l’électrolyse est la seule méthode d’épilation officiellement reconnue comme permanente.</label>
                </div>
               
                <div className={styles.question}>
                  <label>⌄  Q: Combien de séances vais‑je devoir faire ?</label>
                  <label>R: Chaque personne est unique, et le nombre de séances dépend de plusieurs facteurs : type de poils, zone traitée, 
                    historique d’épilation, variations hormonales, etc. Une évaluation personnalisée permet d’établir un plan adapté et réaliste.</label>
                </div>
                <div className={styles.question}>
                  <label>⌄  Q: Est‑ce douloureux ?</label>
                  <label>R: Vous pouvez ressentir une légère chaleur ou un picotement, mais le traitement est généralement très bien toléré.</label>
                </div>
                <div className={styles.question}>
                  <label>⌄  Q: Est-ce efficace sur les poils clairs, roux ou blancs?</label>
                  <label>R: Oui. L’électrolyse est la seule méthode réellement définitive pour ces types de poils, puisqu’ils ne répondent pas au laser.</label>
                </div>
                <div className={styles.question}>
                  <label>⌄  Q: Puis-je faire de l’électrolyse si j’ai déjà fait du laser ?</label>
                  <label>R: Oui. C’est même la combinaison idéale pour éliminer les poils restants, fins, pâles ou résistants au laser.</label>
                </div>
                <div className={styles.question}>
                  <label>⌄  Q: À quel rythme devrais-je revenir ?</label>
                  <label>R: La plupart des clients reviennent toutes les 1 à 4 semaines pendant quelques mois, selon la zone et la vitesse de repousse.</label>
                </div>
            </div>
          
            <h2 id="Tarifs" className={styles.title2}>Tarifs</h2>

            <ul className={styles.liste}>
              <li>15 min – 50$</li>
              <li>30 min – 60$</li>
              <li>45 min – 75$</li>
              <li>60 min – 90$</li>
            </ul>

            <p className={styles.texteSous}>La consultation est obligatoire, gratuite et sans engagement pour les nouveaux clients.</p>
            <p className={styles.texteItal}>*Les tarifs peuvent varier selon la zone, la durée ou la nature du soin. Certains traitements peuvent être refusés à la discrétion de l’électrolyste.</p>
        </div>
      
      <div id="APropos" className={styles.paragraphType2}>
        <h2 className={styles.title}>À PROPOS</h2>
        <p className={styles.texteblack}>Je m’appelle Pascale Legault, je suis électrolyste certifiée et spécialisée en microtrolyse depuis 2022.
           J’ai développé une approche à la fois minutieuse et bienveillante, axée sur le confort et la confiance. Chaque séance est adaptée aux besoins, 
           au corps et au rythme de la personne. Mon objectif est d’offrir un espace où l’on se sent en sécurité, écouté et accompagné vers des résultats durables.  </p>
      </div>



      <div id="Contact" className={styles.paragraphType3}>
        <h2 className={styles.title2}>Coordonnées</h2>
        <ul>
          <li className={styles.infoliste}>
            <label className={styles.infoName}>Courriel </label>
            <label className={styles.texte}>microcliniqueclarea@gmail.com</label>
          </li>
          <li className={styles.infoliste}>
            <label className={styles.infoName}>Adresse </label>
            <label className={styles.texte}>1121 Rue de Bellechasse, Montréal, QC H2S 1Y5 (Clinique Neva)</label>
          </li>
        </ul>
        <label className={styles.infoDesc}>*Par rendez-vous seulement  </label>

        <h2 className={styles.title2}>Heures d’ouverture</h2>
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
