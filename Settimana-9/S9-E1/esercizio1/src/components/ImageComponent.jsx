// Importiamo React e la classe Component dalla libreria React.
// React è la libreria che ci permette di costruire l'interfaccia, e Component
// è una "mattonella" che usiamo per creare componenti basati su classi.
import React, { Component } from 'react';

// Creiamo una classe chiamata ImageComponent che estende (cioè "eredita") Component.
// Questo significa che ImageComponent è un tipo speciale di componente React.
class ImageComponent extends Component {
  // Il metodo render() è come un disegnatore: dice a React cosa mostrare sullo schermo.
  render() {
    // Qui prendiamo i dati (chiamati "props") che il componente riceve quando viene usato.
    // In particolare, estraiamo due valori:
    // - 'src': l'indirizzo (URL) dell'immagine.
    // - 'alt': il testo alternativo, che descrive l'immagine.
    const { src, alt } = this.props;
    
    // Restituiamo (cioè, "diciamo") a React di disegnare un tag <img>.
    // L'attributo src viene impostato con il valore di 'src'
    // e l'attributo alt viene impostato con il valore di 'alt'.
    return (
      <img src={src} alt={alt} />
    );
  }
}

// Esportiamo il componente in modo che possa essere utilizzato in altri file del progetto.
export default ImageComponent;
