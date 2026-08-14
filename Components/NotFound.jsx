import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page non trouvée</h1>
      <p>Desole, la page que vous cherchez n'existe pas, ou l'URL est incorrecte.</p>
      <Link href="/">Retour à l'accueil</Link>
    </div>
  );
};
export default NotFound;