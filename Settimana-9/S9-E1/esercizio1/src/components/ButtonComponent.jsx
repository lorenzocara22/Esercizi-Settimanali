/*Questa riga serve a importare la libreria React nel nostro file. 
    React ci offre gli strumenti per creare componenti e costruire l'interfaccia dell'applicazione. */

import React from "react";

/*Qui stiamo creando una funzione chiamata ButtonComponent. In React, 
    un componente può essere creato come una funzione che restituisce (o "ritorna") del codice HTML (in realtà, JSX) che verrà visualizzato sullo schermo.

Cosa significa { text }?
Le parentesi graffe {} indicano che stiamo estraendo una proprietà (chiamata prop) chiamata text dall'oggetto che il componente riceve. 
Pensa alle props come a dei "pacchetti" di informazioni che il componente può usare per decidere cosa mostrare. 
In questo caso, text sarà il testo che apparirà dentro il bottone.. */

function ButtonComponent({ text }) {
  /*<button> è un tag HTML che crea un bottone.
All'interno del tag <button>, mettiamo {text}. Le parentesi graffe indicano a React di inserire il valore della variabile text in quel punto. */

return (
    <button>
      {text}
    </button>
  );
}

/*Questa riga rende il componente ButtonComponent disponibile per essere usato in altri file. 
    In altre parole, dice: "Ehi, questo pezzo di codice è pronto per essere importato e utilizzato altrove nella mia applicazione!" */

export default ButtonComponent;
