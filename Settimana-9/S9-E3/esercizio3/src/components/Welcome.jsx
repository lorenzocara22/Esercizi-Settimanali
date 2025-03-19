// Importiamo il componente Alert da Bootstrap
import { Alert } from "react-bootstrap";

// Creiamo il componente Welcome che mostra un messaggio di benvenuto
const Welcome = () => (
  <Alert className="text-center">
    <h1>Benvenuti in EpiBooks!</h1>
  </Alert>
);

// Esportiamo Welcome per poterlo usare in altri file
export default Welcome;
