"use client"
import { useState } from "react";
import styles from './Faq.module.css';

export default function Questions() {
    
  const [Q1, setQ1] = useState(false);
  const [Q2, setQ2] = useState(false);
  const [Q3, setQ3] = useState(false);
  const [Q4, setQ4] = useState(false);
  const [Q5, setQ5] = useState(false);
  const [Q6, setQ6] = useState(false);

  return <>
  <div className={styles.listeQuestion}>
                <div className={styles.question} onClick={() => setQ1(!Q1)}>
                  <label className={styles.q} onClick={() => setQ1(!Q1)}>▼  Q: Est‑ce vraiment permanent ?</label>
                  <label className={`${Q1 ? styles.questionO : styles.questionC}`} >R: Oui, l’électrolyse est la seule méthode d’épilation officiellement reconnue comme permanente.</label>
                </div>
               
                <div className={styles.question} onClick={() => setQ2(!Q2)}>
                  <label className={styles.q} onClick={() => setQ2(!Q2)}>▼  Q: Combien de séances vais‑je devoir faire ?</label>
                  <label className={`${Q2 ? styles.questionO : styles.questionC}`} >R: Chaque personne est unique, et le nombre de séances dépend de plusieurs facteurs : type de poils, zone traitée, 
                    historique d’épilation, variations hormonales, etc. Une évaluation personnalisée permet d’établir un plan adapté et réaliste.</label>
                </div>
                <div className={styles.question} onClick={() => setQ6(!Q6)}>
                  <label className={styles.q} onClick={() => setQ6(!Q6)}>▼  Q: À quel rythme devrais-je revenir ?</label>
                  <label className={`${Q6 ? styles.questionO : styles.questionC}`} >R: La plupart des clients reviennent toutes les 1 à 4 semaines pendant quelques mois, selon la zone et la vitesse de repousse.</label>
                </div>
                <div className={styles.question} onClick={() => setQ3(!Q3)}>
                  <label className={styles.q} onClick={() => setQ3(!Q3)}>▼  Q: Est‑ce douloureux ?</label>
                  <label className={`${Q3 ? styles.questionO : styles.questionC}`} >R: Vous pouvez ressentir une légère chaleur ou un picotement, mais le traitement est généralement très bien toléré.</label>
                </div>
                <div className={styles.question} onClick={() => setQ4(!Q4)}>
                  <label className={styles.q} onClick={() => setQ4(!Q4)}>▼  Q: Est-ce efficace sur les poils clairs, roux ou blancs?</label>
                  <label className={`${Q4 ? styles.questionO : styles.questionC}`} >R: Oui. L’électrolyse est la seule méthode réellement définitive pour ces types de poils, puisqu’ils ne répondent pas au laser.</label>
                </div>
                <div className={styles.question} onClick={() => setQ5(!Q5)}>
                  <label className={styles.q} onClick={() => setQ5(!Q5)}>▼  Q: Puis-je faire de l’électrolyse si j’ai déjà fait du laser ?</label>
                  <label className={`${Q5 ? styles.questionO : styles.questionC}`} >R: Oui. C’est même la combinaison idéale pour éliminer les poils restants, fins, pâles ou résistants au laser.</label>
                </div>
                
            </div>
  </>
    
}