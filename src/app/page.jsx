import styles from "./page.module.css";
import Entete from "../../Components/Entete";
import RDV from "../../Components/RDV";
import Faq from "../../Components/Faq";
import Link from "next/link";
import NotFound from "../../Components/NotFound";
import dynamic from 'next/dynamic';

const Maps = dynamic(
  () => import('../../components/MapsClient'),
  {
    ssr: false,
    loading: () => <p>Loading map...</p>,
  }
);


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
      <div>

      <div style={{ width: '100%', height: '400px' }}>
        <Maps />
      </div>
    </div>
  );
}
