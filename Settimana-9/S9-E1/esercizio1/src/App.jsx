
import './App.css'

// src/App.jsx
import React from 'react';
import ButtonComponent from './components/ButtonComponent'; // Importa il componente del bottone
import ImageComponent from './components/ImageComponent';   // Importa il componente dell'immagine

function App() {
  return (
    <div className="App">
      {/* Usiamo il ButtonComponent e passiamo il testo da mostrare */}
      <ButtonComponent text="Cliccami!" />
      
      {/* Usiamo l'ImageComponent e passiamo l'URL dell'immagine e il testo alternativo */}
      <ImageComponent 
        src="https://sportando.basketball/wp-content/uploads/2025/02/Gizii9naIAA_zzK.jpg" 
        alt="Immagine di esempio" 
      />
    </div>
  );
}

export default App;
