import styles from "./page.module.css";
import Entete from "../../Components/Entete";
import RDV from "../../Components/RDV";
import Faq from "../../Components/Faq";
import Link from "next/link";


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
              <p className={styles.texteblack}> Deux des technologies les plus performantes de l’industrie y sont
                utilisées pour atteindre vos objectifs : l’électrolyse de précision, pour
                un travail minutieux poil par poil, et l’épilation au laser, pour les zones
                plus étendues et des résultats rapides.
              </p>
              <p className={styles.texteblack}>
                Deux approches complémentaires, un même standard : des traitements
                complets, sécuritaires et respectueux de votre peau.
              </p>
              
            </div>
          </div>
        <div className={styles.paragraphType1}>
            <p id="Électrolyse au microscope" className={styles.texte}> 
              Bien qu’une seule des technologies puisse suffire pour atteindre vos
              objectifs, il est parfois judicieux de les combiner afin d’accélérer le
              processus et d’obtenir des résultats complets et durables. Une stratégie
              adaptée à votre cas sera proposée lors de la consultation. 
            </p>
            <h2 className={styles.title2}>Pourquoi choisir l'électrolyse?</h2>
            <p className={styles.texte}>Voici quelques situations fréquentes dans lesquelles l’électrolyse peut être recommandée :</p>
            <ul className={styles.liste}>
              <li>Pilosité liée à des variations hormonales (grossesse, ménopause, SOPK/PCOS, hirsutisme et autres)</li>
              <li>Transition/affirmation de genre</li>
              <li>Finition après des traitements au laser (poils blancs, pâles ou fins résistants au laser)</li>
              <li>Contre-indications au laser (médications, phototypes non compatibles, etc.)</li>
              <li>Poils isolés sur des zones sensibles ou très sculptées (ex. mamelon, arcade sourcilière, etc.)</li>
            </ul>
            <p className={styles.texte}>
              L’électrolyse permet de traiter chaque poil
              individuellement et de manière définitive.
              Chez Clarea, l’épilateur Elite Spectrum
              d’Instantron est utilisé en combinaison
              avec un microscope chirurgical Zeiss
              pour un traitement d’une grande
              précision. À l’aide d’un filament stérile,
              jetable et changé à chaque session, la
              racine du poil est ciblée pour empêcher
              sa repousse.
            </p>
            <h2 className={styles.title2}>Pourquoi choisir le laser?</h2>
            <ul className={styles.liste}>
              <li>Réduction rapide de la pilosité sur les grandes zones</li>
              <li>Poils foncés sur peau claire (cas idéal pour l’absorption du laser)</li>
              <li>Complément avant l’électrolyse pour réduire la densité de la pilosité </li>
              <li>Transition / affirmation de genre</li>
              <li>Folliculites ou poils incarnés</li>
              <li>Irritation suite au rasage ou à l’épilation à la cire</li>
            </ul>
            <p className={styles.texte}>
              Le laser permet de traiter un grand nombre de poils simultanément, ce qui réduit rapidement la densité et la
              fréquence de repousse. Chez Clarea, l’appareil LightSheer de Lumenis est utilisé, une technologie éprouvée et
              reconnue pour offrir des résultats constants et rapides en épilation laser. Ce laser diode est optimisé pour les
              phototypes 1 à 4 sur l’échelle de Fitzpatrick, avec une excellente absorption sur les poils foncés et les
              peaux claires à moyennement foncées.
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
              <li>15 min – 50$</li>
              <li>30 min – 60$</li>
              <li>45 min – 75$</li>
              <li>60 min – 90$</li>
              <li>90 min – 140$</li>
            </ul>
            <h2 className={styles.title3}>Épilation au laser</h2>
            <ul className={styles.liste}>
              <li>Petite zone – 50$
                <p className={styles.texteblack}>(ex : lèvre supérieure, menton, favoris, ligne du nombril…) </p>
              </li>
              <li>Zone moyenne – 80$
              <p className={styles.texteblack}>(ex : nuque, cou, aisselles, bikini classique…) </p>
              </li>
              <li>Grande zone – 110$
              <p className={styles.texteblack}>(ex : visage complet + cou, demi-jambes, bikini intégral, épaules…) </p>
              </li>
              <li>Très grande zone – 140$
              <p className={styles.texteblack}>(ex : jambes complètes, dos, torse, etc.) </p>
              </li>
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
            <label className={styles.infoName}>Courriel :</label>
            <Link className={styles.texte} href="mailto:clarea.epilation@gmail.com" >clarea.epilation@gmail.com</Link>
          </li>
          <li className={styles.infoliste}>
            <label className={styles.infoName}>Texte/appel : </label>
            <label className={styles.texte}>819-743-9210</label>
          </li>
          <li className={styles.infoliste}>
            <label className={styles.infoName}>Adresse :</label>
            <Link className={styles.texte} href="https://www.google.com/maps/place/1121+Rue+de+Bellechasse,+Montréal,+QC+H2S+1Y5/@45.5368223,-73.6007689,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc9196632bd8e8b:0xa4f58f43cfb19c9e!8m2!3d45.5368223!4d-73.5981886!16s%2Fg%2F11nntq80_f?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D">1121 Rue de Bellechasse, Montréal, QC H2S 1Y5</Link>
            <Link className={styles.texte} href="https://www.cliniqueneva.com/"> (Clinique Neva)</Link>
          </li>
        </ul>
        <h2 className={styles.title2}>Disponibilité</h2>
        <label className={styles.infoDesc}>*Par rendez-vous seulement  </label>
        <ul>
          <li className={styles.texteblack}>Lundi : 17 h à 22 h</li>
          <li className={styles.texteblack}>Jeudi : 17 h à 22 h</li>
          <li className={styles.texteblack}>Samedi : 10 h à 18 h</li>
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
