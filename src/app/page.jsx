import styles from "./page.module.css";
import Entete from "../../Components/Entete";
import RDV from "../../Components/RDV";
import Faq from "../../Components/Faq";
import Link from "next/link";
import Maps from "../../Components/Maps";
import NotFound from "../../Components/NotFound";


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
            <h2 className={styles.title}>Clarea se spécialise dans l’épilation définitive.</h2>
            <div className={styles.paragraphType4}>
              <p className={styles.texteblack}> Grâce à l’électrolyse de précision et au laser, nous adaptons chaque traitement pour
des résultats durables, sécuritaires et respectueux de votre peau.
              </p>
              <div className={styles.containerRdv}>
                <RDV></RDV>
              </div>
              
            </div>
          </div>
        <div className={styles.paragraphType1}>
            <p id="Elec" className={styles.texte}> 
              Bien qu’une seule de ces technologies puisse suffire, leur combinaison peut
              accélérer le traitement et améliorer les résultats à long terme. La meilleure
              approche est définie lors de votre consultation.
            </p>
            <h2 className={styles.title2}>L’électrolyse
</h2>
            <p className={styles.texte}>est recommandée pour :</p>
            <ul className={styles.liste}>
              <li>Pilosité liée à des variations hormonales (grossesse, ménopause, certaines médications ou contraceptifs);</li>
              <li>Hirsutisme, SOPK/PCOS ou SMOP : syndrome métabolique ovarien polyendocrinien;</li>
              <li>Transition/affirmation de genre;</li>
              <li>Poils résistants au laser (blancs, pâles ou très fins);</li>
              <li>Contre-indications au laser (médications, phototypes non compatibles, etc.)</li>
              <li>Poils isolés sur des zones sensibles ou très sculptées (ex. mamelon, arcade sourcilière, etc.)</li>
            </ul>
            <p className={styles.texte}>
              L’électrolyse permet de traiter chaque poil individuellement de manière
              définitive. Chez CLAREA, l’épilateur Elite Spectrum d’Instantron est utilisé en
              ombinaison avec un microscope chirurgical Zeiss pour un traitement d’une
              grande précision. À l’aide d’un filament stérile, jetable et changé à chaque
              session, la racine du poil est ciblée pour empêcher sa repousse.
            </p>

            <h2 id="Laser" className={styles.title2}>Le laser</h2>
            <p className={styles.texte}>est idéal pour :</p>
            <ul className={styles.liste}>
              <li>Réduire rapidement la pilosité sur les grandes zones</li>
              <li>Poils foncés sur peau claire à moyennement foncée</li>
              <li>Diminuer la densité avant un traitement d’électrolyse </li>
              <li>Transition ou affirmation de genre</li>
              <li>Folliculites et poils incarnés</li>
              <li>Irritation suite au rasage ou à l’épilation à la cire</li>
            </ul>
            <p className={styles.texte}>
              Le laser traite simultanément un grand nombre de poils, réduisant rapidement la densité
              et la repousse, grâce à la technologie LightSheer de Lumenis, un laser diode adapté
              aux phototypes 1 à 4 selon l’échelle de Fitzpatrick. 
            </p>
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
            <h2 className={styles.title3}>Électrolyse au microscope</h2>
            
            <ul className={styles.liste}>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>Durée du traitement </li>
                  <li>Prix</li>
                </ul>
              </div>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>15 min </li>
                  <li> 50$</li>
                </ul>
              </div>
                <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>30 min </li>
                  <li> 70$</li>
                </ul>
              </div>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>45 min </li>
                  <li> 90$</li>
                </ul>
              </div>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>60 min </li>
                  <li> 110$</li>
                </ul>
              </div>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>90 min </li>
                  <li> 150$</li>
                </ul>
              </div>
            </ul>
            <h2 className={styles.title3}>Épilation au laser</h2>
            <ul className={styles.liste}>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>Zone - </li>
                  <li>Prix</li>
                </ul>
                </div>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>Petite zone - </li>
                  <li> 50$ </li>
                </ul>
                <p className={styles.texteblack}>(ex : lèvre supérieure, menton, favoris, ligne du nombril…) </p>
              </div>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>Zone moyenne - </li>
                  <li> 90$</li>
                </ul>
                <p className={styles.texteblack}>(ex : nuque, cou, aisselles, bikini classique…) </p>
              </div>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>Grande zone - </li>
                  <li > 125$</li>
                </ul>
              </div>
                <p className={styles.texteblack}>(ex : visage complet + cou, demi-jambes, bikini intégral, épaules…) </p>
              <div className={styles.listeUnderlined}>
                <ul className={styles.colone}>
                  <li>Très grande zone - </li>
                  <li> 165$</li>
                </ul>
                <p className={styles.texteblack}>(ex : jambes complètes, dos, torse, etc.) </p>   
              </div>           
            </ul>

            <p className={styles.texteSous}>La consultation est obligatoire, gratuite et sans engagement pour les nouveaux clients.</p>
            <p className={styles.texteItal}>*Les tarifs peuvent varier selon la zone, la durée ou la nature du soin. Certains
              traitements peuvent être refusés à la discrétion de l’électrolyste.
            </p>
        </div>


      <div id="Contact" className={styles.paragraphType3}>
        <h2 className={styles.title2}>Coordonnées</h2>
        <p className={styles.texteGrand}>
          <span className={styles.infoDesc}>CLAREA est située à la </span> 
          <span className={styles.infoLink} href="https://www.cliniqueneva.com/">Clinique Néva</span>
          <span className={styles.infoDesc}>, au </span> 
          <span className={styles.infoLink} href="https://www.google.com/maps/place/1121+Rue+de+Bellechasse,+Montréal,+QC+H2S+1Y5/@45.5368223,-73.6007689,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc9196632bd8e8b:0xa4f58f43cfb19c9e!8m2!3d45.5368223!4d-73.5981886!16s%2Fg%2F11nntq80_f?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D">1121 Rue de Bellechasse, Montréal, QC H2S 1Y5</span>
        </p>
        <p className={styles.texteGrand}>
          <span className={styles.infoDesc}>Les plages horaires habituelles sont les lundis et jeudis de 17 h à 21 h, ainsi que les samedis de 10 h à 18 h.</span>
        </p>
        <p className={styles.texteGrand}>
          <span className={styles.infoDesc}>Tous les traitements sont obligatoirement précédés d’une consultation
gratuite. Un dépôt remboursable ou transférable à un autre rendez-vous peut
être demandé afin de confirmer la réservation.</span>
        </p>

        {/* <Maps></Maps> */}
        <p className={styles.texteGrand}>
          <span className={styles.infoDesc}>Tous les rendez-vous doivent être pris directement sur la plateforme
          GOrendezvous en cliquant sur le bouton ci-dessous. Pour toute question,
          vous pouvez également communiquer avec moi par courriel :</span>
          <span className={styles.infoLink} href="mailto:clarea.epilation@gmail.com" >clarea.epilation@gmail.com</span>
        </p>
        <h2 className={styles.title2}>Rendez-vous</h2>
      <div className={styles.containerRdv}>
        <RDV></RDV>
       </div>
      </div>

    </main>
    <footer className={styles.footer}>
        <label className={styles.FooterLink} href="mailto:clarea.epilation@gmail.com" >clarea.epilation@gmail.com</label>
        <div className={styles.colone}>
          
          <label className={styles.FooterText}>© 2026 Clarea · </label>
          <Link className={styles.FooterLink} href="/Confidentialite">Politique de confidentialité</Link>

        </div>
    </footer>
  </div>
  );
}
