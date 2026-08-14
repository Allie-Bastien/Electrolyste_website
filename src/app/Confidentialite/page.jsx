import Link from "next/link";


export const metadata = {
  title: "Politique de confidentialité | Clinique Clarea",
  description: "Découvrez notre politique de confidentialité",
};

export default function Confidentialite() {
  return <>
    <main>
      <div style={{ textAlign: 'center', marginTop: '50vh' ,flexDirection: 'column', display: 'flex', alignItems: 'center' }}> 
      <label>La page est actuellement en cours de développement.</label>
      <Link style={{   fontWeight: 'bold', marginTop: '20px' }} href="/">Retour à l'accueil</Link>
      </div>
    </main>
  </>
}